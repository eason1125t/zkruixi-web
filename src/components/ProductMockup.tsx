/**
 * 康析产品界面 Mockup：以可维护的 HTML/CSS/SVG 演示手机、手表和趋势分析，
 * 不依赖真实用户数据或第三方截图，所有数值均明确标为演示。
 */
export function ProductMockup() {
  return (
    <div className="mockup-stage" aria-label="康析产品界面演示">
      <div className="float-note note-ai">
        <span className="status-dot" />
        <div>
          <small>AI 趋势提醒</small>
          <strong>建议优先保证休息</strong>
        </div>
      </div>

      <div className="phone-frame">
        <div className="phone-top">
          <span>09:41</span>
          <span className="phone-island" />
          <span>● 5G</span>
        </div>
        <div className="phone-app">
          <div className="phone-greeting">
            <div>
              <small>7月3日 · 演示数据</small>
              <strong>早上好，今天状态平稳</strong>
            </div>
            <span className="avatar">康</span>
          </div>
          <div className="score-card">
            <div className="score-ring">
              <span>85</span>
              <small>健康评分</small>
            </div>
            <div>
              <span className="mini-pill">整体平稳</span>
              <p>睡眠略有不足，今天建议降低高强度运动。</p>
            </div>
          </div>
          <div className="metric-grid">
            <div>
              <span className="metric-icon blue">月</span>
              <small>睡眠</small>
              <strong>7<em>时</em>12<em>分</em></strong>
            </div>
            <div>
              <span className="metric-icon green">♥</span>
              <small>静息心率</small>
              <strong>72<em>次/分</em></strong>
            </div>
            <div>
              <span className="metric-icon cyan">O₂</span>
              <small>血氧</small>
              <strong>98<em>%</em></strong>
            </div>
          </div>
          <div className="trend-card">
            <div className="trend-card-head">
              <span>近 7 天健康趋势</span>
              <small>演示</small>
            </div>
            <svg
              aria-label="近七天健康趋势总体平稳，末段略有下降"
              role="img"
              viewBox="0 0 300 92"
            >
              <defs>
                <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#2583FF" stopOpacity=".28" />
                  <stop offset="1" stopColor="#2583FF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 70 C28 61,40 43,68 49 S104 68,130 46 S170 31,195 39 S235 57,260 42 S284 48,300 35 V92 H0Z"
                fill="url(#chart-fill)"
              />
              <path
                d="M0 70 C28 61,40 43,68 49 S104 68,130 46 S170 31,195 39 S235 57,260 42 S284 48,300 35"
                fill="none"
                stroke="#2583FF"
                strokeLinecap="round"
                strokeWidth="4"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="watch-frame" aria-hidden="true">
        <div className="watch-screen">
          <small>今日状态</small>
          <strong>平稳</strong>
          <svg viewBox="0 0 90 30">
            <path
              d="M2 18h14l7-11 9 20 10-17 7 8h39"
              fill="none"
              stroke="#75E6D6"
              strokeLinecap="round"
              strokeWidth="3"
            />
          </svg>
          <span>72 次/分</span>
        </div>
      </div>

      <div className="float-note note-data">
        <small>连续趋势</small>
        <div className="mini-bars" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <strong>近 7 天总体平稳</strong>
      </div>
      <p className="demo-caption">界面及数值仅为产品功能演示，不代表医学结论</p>
    </div>
  );
}
