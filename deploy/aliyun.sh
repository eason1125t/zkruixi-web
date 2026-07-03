#!/usr/bin/env bash
# 泽康睿析官网部署脚本：在 Alibaba Cloud Linux 上安装依赖、拉取源码、
# 构建 Next.js 静态站点，并交由 Nginx 对外提供 HTTP 服务。

set -Eeuo pipefail

APP_DIR="/opt/zkruixi-web"
WEB_ROOT="/var/www/zkruixi"
REPO_URL="https://github.com/eason1125t/zkruixi-web.git"
NODE_BASE="https://nodejs.org/download/release/latest-v22.x"

echo "[1/7] 安装系统依赖"
# 宝塔镜像默认可能通过 DNF exclude 屏蔽 Nginx；本次显式解除过滤，
# 仅安装发行版软件源中的标准 Nginx 包，不修改全局 DNF 配置。
dnf --disableexcludes=all install -y git nginx curl ca-certificates tar xz

echo "[2/7] 安装 Node.js 22 LTS"
case "$(uname -m)" in
  x86_64) NODE_ARCH="x64" ;;
  aarch64) NODE_ARCH="arm64" ;;
  *)
    echo "不支持的 CPU 架构: $(uname -m)" >&2
    exit 1
    ;;
esac

# 从 Node.js 官方发布目录选择最新的 22.x LTS，并在解压前校验 SHA-256。
NODE_FILE="$(
  curl -fsSL "$NODE_BASE/SHASUMS256.txt" |
    awk -v arch="$NODE_ARCH" \
      '$2 ~ ("node-v.*-linux-" arch "\\.tar\\.xz$") { print $2; exit }'
)"
test -n "$NODE_FILE"
curl -fsSL "$NODE_BASE/$NODE_FILE" -o "/tmp/$NODE_FILE"
curl -fsSL "$NODE_BASE/SHASUMS256.txt" -o /tmp/node-shasums.txt
(cd /tmp && grep "  $NODE_FILE$" node-shasums.txt | sha256sum -c -)
tar -xJf "/tmp/$NODE_FILE" -C /usr/local --strip-components=1
node --version
npm --version

echo "[3/7] 配置 2 GiB Swap"
if ! swapon --show=NAME --noheadings | grep -qx "/swapfile"; then
  if [[ ! -f /swapfile ]]; then
    fallocate -l 2G /swapfile ||
      dd if=/dev/zero of=/swapfile bs=1M count=2048 status=progress
    chmod 600 /swapfile
    mkswap /swapfile
  fi
  swapon /swapfile
fi

grep -qF "/swapfile none swap sw 0 0" /etc/fstab ||
  printf "%s\n" "/swapfile none swap sw 0 0" >>/etc/fstab

echo "[4/7] 拉取 GitHub 项目"
if [[ -d "$APP_DIR/.git" ]]; then
  git -C "$APP_DIR" checkout main
  git -C "$APP_DIR" pull --ff-only origin main
else
  if [[ -d "$APP_DIR" ]] &&
    [[ -n "$(find "$APP_DIR" -mindepth 1 -maxdepth 1 -print -quit)" ]]; then
    echo "$APP_DIR 已存在且非空，停止以保护现有文件。" >&2
    exit 1
  fi
  git clone --branch main --single-branch "$REPO_URL" "$APP_DIR"
fi

echo "[5/7] 安装依赖并构建"
cd "$APP_DIR"
npm ci
NODE_OPTIONS="--max-old-space-size=1536" npm run build
test -f "$APP_DIR/out/index.html"

echo "[6/7] 发布静态文件并配置 Nginx"
mkdir -p "$WEB_ROOT"
cp -a "$APP_DIR/out/." "$WEB_ROOT/"
if command -v restorecon >/dev/null 2>&1; then
  restorecon -RF "$WEB_ROOT" || true
fi

cat >/etc/nginx/conf.d/zkruixi.conf <<'NGINX'
# 泽康睿析官网：托管 Next.js 静态导出，并兼容带斜杠的静态路由。
server {
    listen 80;
    listen [::]:80;
    server_name zkruixi.com www.zkruixi.com;

    root /var/www/zkruixi;
    index index.html;

    location /_next/static/ {
        try_files $uri =404;
        expires 1y;
        add_header Cache-Control "public, immutable" always;
    }

    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    error_page 404 /404.html;
    location = /404.html {
        internal;
    }
}
NGINX

nginx -t
systemctl enable --now nginx
systemctl reload nginx

echo "[7/7] 本机验收"
curl -fsSI -H "Host: zkruixi.com" http://127.0.0.1/
curl -fsS -H "Host: zkruixi.com" http://127.0.0.1/ | grep -q "泽康睿析"
echo "DEPLOY_OK"
