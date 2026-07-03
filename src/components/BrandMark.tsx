/**
 * 临时原创品牌标识组件：用于页头与页脚，始终与公司简称组合展示。
 * 正式 Logo 获得授权后，可仅替换内部 SVG 而不影响页面结构。
 */
export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand-lockup">
      <svg
        aria-hidden="true"
        className="brand-symbol"
        viewBox="0 0 44 44"
        fill="none"
      >
        <rect width="44" height="44" rx="13" fill="url(#brand-gradient)" />
        <path
          d="M11 27.5c4.5 0 5-11 9-11s4.5 15 9 15c2.5 0 3.5-4 5-8"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="29" cy="13" r="3" fill="#9FF4E7" />
        <defs>
          <linearGradient id="brand-gradient" x1="4" y1="4" x2="40" y2="40">
            <stop stopColor="#2583FF" />
            <stop offset="1" stopColor="#18A999" />
          </linearGradient>
        </defs>
      </svg>
      <span>
        <strong>泽康睿析</strong>
        {!compact && <small>智能健康科技</small>}
      </span>
    </span>
  );
}
