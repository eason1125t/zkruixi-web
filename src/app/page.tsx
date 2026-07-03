/**
 * 公司官网首页：以泽康睿析为主体，完整呈现旗下康析产品、技术方向与公司信息。
 * 各区块链接到独立产品、公司、联系及法律页面，便于未来扩展更多产品。
 */
import Link from "next/link";
import { ProductMockup } from "@/components/ProductMockup";
import { ProductLogo } from "@/components/ProductLogo";
import { SectionHeading } from "@/components/SectionHeading";
import {
  healthDisclaimer,
  siteConfig,
  statusCopy,
} from "@/config/site";

const healthMetrics = [
  ["♥", "心率", "观察日常心率变化"],
  ["↘", "静息心率", "理解个人近期水平"],
  ["BP", "血压", "整理设备测量记录"],
  ["O₂", "血氧", "持续查看血氧趋势"],
  ["〽", "ECG 心电", "汇总设备心电数据"],
  ["☾", "睡眠", "分析时长与规律"],
  ["°C", "体温", "了解体温变化"],
  ["≈", "压力值", "关注身心压力趋势"],
] as const;

const steps = [
  ["01", "连接智能手表", "在用户授权后建立设备连接"],
  ["02", "持续同步数据", "整理分散的日常健康指标"],
  ["03", "AI 分析趋势", "对比近期变化与个人水平"],
  ["04", "获得健康参考", "查看提醒、目标与健康报告"],
] as const;

const plans = [
  {
    name: "免费版",
    tagline: "轻松开始日常健康记录",
    featured: false,
    features: ["基础健康数据查看", "简版每周健康报告", "少量健康提醒", "注册赠送 1 次专业版报告"],
  },
  {
    name: "Pro 版",
    tagline: "深入理解长期健康变化",
    featured: true,
    features: ["免费版全部功能", "每日 AI 健康分析", "异常变化提醒", "健康目标与个性化计划", "每月赠送 1 次专业版报告"],
  },
  {
    name: "家庭版",
    tagline: "守护全家人的健康变化",
    featured: false,
    features: ["Pro 版全部功能", "最多添加 5 名家庭成员", "授权后查看成员健康状态", "家人异常提醒同步", "每位成员每月 1 次专业版报告"],
  },
] as const;

const faqs = [
  ["康析是由哪家公司开发的？", "康析由厦门泽康睿析科技有限责任公司研发，是公司旗下智能健康管理产品。"],
  ["康析能够替代医生诊断吗？", "不能。康析提供健康管理和就医沟通参考，不构成医学诊断、治疗或处方建议。"],
  ["康析支持哪些智能手表？", "具体支持范围将在产品上线前公布，可同步指标取决于设备型号、系统和用户授权。"],
  ["为什么报告需要至少一周数据？", "连续数据有助于呈现更有参考意义的近期趋势；单份报告最多涵盖一个月数据。"],
  ["家庭成员能看到我的全部数据吗？", "不能默认查看。每位成员使用独立账号，只有主动授权后才能共享相应信息，且授权可撤回。"],
  ["腾讯 ACA 是否已经正式接入？", "尚未。当前状态为规划阶段，不代表已接入或获得第三方认证。"],
] as const;

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero shell">
        <div className="hero-copy">
          <span className="product-label">
            <i aria-hidden="true" />
            泽康睿析旗下智能健康管理产品
          </span>
          <div className="product-identity">
            <ProductLogo priority size="large" />
            <div>
              <small>智能健康管理 App</small>
              <p className="product-name">{siteConfig.productName}</p>
            </div>
          </div>
          <h1>{siteConfig.productSubtitle}</h1>
          <p className="hero-lead">
            连接智能手表，持续汇总睡眠、心率、血氧和压力等数据。康析通过 AI
            分析近期趋势，为你提供清晰的健康提醒、行动建议与专业版报告。
          </p>
          <div className="hero-actions">
            <Link className="button" href="/contact">
              预约体验 <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-secondary" href="#features">
              了解核心功能
            </Link>
          </div>
          <div className="launch-note">
            <span className="launch-icon" aria-hidden="true">i</span>
            <p>
              康析由{siteConfig.companyFullName}研发，当前处于产品筹备阶段，
              功能和支持设备以上线版本为准。
            </p>
          </div>
        </div>
        <ProductMockup />
      </section>

      <section className="trust-strip" aria-label="产品原则">
        <div className="shell trust-grid">
          <span><b>01</b> 用户授权后同步</span>
          <span><b>02</b> 关注长期变化</span>
          <span><b>03</b> 健康管理参考</span>
          <span><b>04</b> 不替代医生诊断</span>
        </div>
      </section>

      <section className="section shell" id="about-company">
        <SectionHeading
          center
          eyebrow="公司与产品"
          title="以技术，让健康数据更容易被理解"
          description={`${siteConfig.companyIntro} 康析是公司当前面向个人与家庭健康管理推出的重点产品。`}
        />
        <div className="relation-grid">
          <article className="relation-card company-card">
            <span className="card-index">01 / 公司</span>
            <div className="relation-icon">泽</div>
            <h3>泽康睿析</h3>
            <p>智能穿戴数据、人工智能与个人健康管理场景的结合。</p>
            <ul className="tag-list">
              <li>健康科技产品研发</li><li>智能穿戴数据应用</li>
              <li>AI 健康分析</li><li>个人与家庭数字健康服务</li>
            </ul>
            <Link href="/about">了解公司方向 →</Link>
          </article>
          <article className="relation-card product-card">
            <span className="card-index">02 / 旗下产品</span>
            <ProductLogo size="medium" />
            <h3>康析</h3>
            <p>面向个人与家庭，把日常健康数据转化为清晰、易执行的管理参考。</p>
            <ul className="tag-list">
              <li>数据趋势理解</li><li>AI 健康提醒</li>
              <li>专业版健康报告</li><li>家庭健康守护</li>
            </ul>
            <Link href="/product/kangxi">查看产品详情 →</Link>
          </article>
        </div>
      </section>

      <section className="section metrics-section" id="features">
        <div className="shell">
          <SectionHeading
            eyebrow="数据能力"
            title="一处整理，连续了解多项健康数据"
            description="康析帮助用户统一查看穿戴设备提供的日常数据，并关注其随时间发生的变化。"
          />
          <div className="metrics-grid">
            {healthMetrics.map(([icon, title, text]) => (
              <article className="metric-card" key={title}>
                <span>{icon}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
          <p className="device-note">
            实际可同步指标取决于设备型号、设备系统和用户授权。
          </p>
        </div>
      </section>

      <section className="section shell">
        <SectionHeading
          center
          eyebrow="使用流程"
          title="不只是记录数字，更帮助你理解身体变化"
          description="康析把分散的穿戴设备数据整理成连续趋势，让用户知道发生了什么、需要关注什么，以及接下来可以做什么。"
        />
        <ol className="steps-grid">
          {steps.map(([number, title, text], index) => (
            <li key={number}>
              <span>{number}</span><h3>{title}</h3><p>{text}</p>
              {index < steps.length - 1 && <i aria-hidden="true">→</i>}
            </li>
          ))}
        </ol>
      </section>

      <section className="section analysis-section" id="analysis">
        <div className="shell split-layout">
          <div className="analysis-visual">
            <div className="chart-panel">
              <div className="panel-title">
                <div><small>近 7 天</small><strong>睡眠与静息心率趋势</strong></div>
                <span>演示数据</span>
              </div>
              <div className="chart-stats">
                <p><small>平均睡眠</small><strong>7<em>小时</em>02<em>分</em></strong></p>
                <p><small>静息心率</small><strong>71<em>次/分</em></strong></p>
              </div>
              <svg aria-label="演示趋势：睡眠时间近期下降，静息心率略有升高" role="img" viewBox="0 0 600 230">
                <g className="grid-lines">
                  <path d="M40 30H580M40 85H580M40 140H580M40 195H580" />
                </g>
                <path className="chart-line blue-line" d="M40 65 C100 55,130 72,180 64 S260 84,315 76 S395 112,450 103 S520 135,580 127" />
                <path className="chart-line green-line" d="M40 151 C100 160,145 145,200 152 S290 134,350 141 S430 122,485 129 S540 112,580 116" />
                <g className="chart-labels">
                  <text x="40" y="220">周一</text><text x="205" y="220">周三</text>
                  <text x="380" y="220">周五</text><text x="550" y="220">今天</text>
                </g>
              </svg>
              <div className="chart-legend"><span className="blue-key">睡眠时长</span><span className="green-key">静息心率</span></div>
            </div>
          </div>
          <div className="analysis-copy">
            <SectionHeading
              eyebrow="AI 健康趋势分析"
              title="看见单次数据，更看懂长期变化"
              description="康析结合近期和历史健康数据，将复杂数据转化为更容易理解的健康提示。"
            />
            <div className="ai-summary">
              <div className="ai-summary-head"><span>AI</span><strong>本周健康小结</strong><small>演示内容</small></div>
              <p>本周睡眠时间较个人近期水平有所下降，静息心率略有升高。今天建议减少高强度运动，并优先保证休息。</p>
              <div><span>趋势</span><span>变化</span><span>建议关注</span><span>管理参考</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell goal-section">
        <div className="goal-copy">
          <SectionHeading
            eyebrow="健康目标"
            title="从发现变化，到形成可执行的改善计划"
            description="根据趋势提示选择目标，结合个人数据生成计划，并在合适的时间获得提醒。计划提供行动参考，不承诺特定改善结果。"
          />
          <div className="goal-tags"><span>改善睡眠</span><span>增加运动</span><span>控制体重</span><span>规律作息</span><span>压力管理</span></div>
        </div>
        <div className="goal-card">
          <div className="goal-card-head"><div><small>当前目标 · 演示</small><h3>改善睡眠</h3></div><strong>3 / 4</strong></div>
          <div className="progress-track"><i /></div>
          <ul>
            <li className="done">23:00 前开始准备入睡</li>
            <li className="done">下午 3 点后减少咖啡因</li>
            <li className="done">每天记录入睡时间</li>
            <li>连续观察 7 天睡眠变化</li>
          </ul>
        </div>
      </section>

      <section className="section report-section" id="report">
        <div className="shell split-layout report-layout">
          <div className="report-copy">
            <SectionHeading
              eyebrow="专业版健康报告"
              title="把分散的数据，整理成一份清晰的健康总结"
              description="汇总关键指标、趋势、事件与 AI 辅助摘要，便于日常健康管理和就医沟通。"
            />
            <ul className="check-list">
              <li>至少积累一周数据后才能生成</li>
              <li>单份报告最多涵盖一个月数据</li>
              <li>可导出 PDF 供用户自行保存</li>
              <li>仅供健康管理与就医沟通参考</li>
            </ul>
            <p className="inline-disclaimer">{healthDisclaimer}</p>
          </div>
          <div className="report-paper" aria-label="专业版健康报告示意">
            <div className="paper-head"><div><small>康析 · 专业版</small><strong>个人健康趋势报告</strong></div><span>演示报告</span></div>
            <div className="paper-range">2026.06.01 — 2026.06.28 · 近 28 天</div>
            <div className="paper-stats">
              <div><small>平均睡眠</small><strong>7h 08m</strong><span>较上期 -12m</span></div>
              <div><small>静息心率</small><strong>71 bpm</strong><span>近期稳定</span></div>
              <div><small>平均血氧</small><strong>98%</strong><span>设备数据</span></div>
            </div>
            <div className="paper-chart">
              <span>睡眠趋势</span>
              <svg viewBox="0 0 400 80"><path d="M0 58 C40 47,65 54,100 38 S170 52,205 31 S270 46,310 28 S365 38,400 22" /></svg>
            </div>
            <div className="paper-summary"><strong>AI 辅助摘要</strong><p>近四周睡眠整体平稳，最近一周入睡时间偏晚，建议关注作息规律。</p></div>
            <div className="paper-foot"><span>包含：睡眠 / 心率 / 血氧 / 血压 / ECG 摘要 / 异常事件</span><button type="button" disabled>导出 PDF 示意</button></div>
          </div>
        </div>
      </section>

      <section className="section shell" id="family">
        <div className="family-heading">
          <SectionHeading
            eyebrow="家庭健康守护"
            title="不仅关注自己，也及时了解家人的变化"
            description="家庭成员拥有独立账号和数据，主动授权后才可共享状态；授权可随时撤回。"
          />
          <span className="member-limit">最多 5 名家庭成员</span>
        </div>
        <div className="family-board">
          {[
            ["自己", "整体平稳", "刚刚同步", "已授权", "good"],
            ["父亲", "建议关注", "10 分钟前", "已授权", "warn"],
            ["母亲", "整体平稳", "25 分钟前", "已授权", "good"],
            ["伴侣", "等待同步", "2 小时前", "部分授权", "neutral"],
          ].map(([name, state, time, auth, tone]) => (
            <article key={name}>
              <div className={`member-avatar ${tone}`}>{name.slice(0, 1)}</div>
              <div><h3>{name}</h3><p>{time}</p></div>
              <strong className={tone}>{state}</strong>
              <span>{auth}</span>
            </article>
          ))}
        </div>
        <p className="device-note">演示状态仅用于说明产品功能；成员需要主动授权，其他家庭成员不能在未授权时查看其完整健康数据。</p>
      </section>

      <section className="section plans-section" id="plans">
        <div className="shell">
          <SectionHeading center eyebrow="会员权益" title="选择适合自己的健康管理方式" description="当前产品处于筹备阶段，具体权益以上线版本为准。" />
          <div className="plans-grid">
            {plans.map((plan) => (
              <article className={`plan-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
                {plan.featured && <span className="recommended">推荐</span>}
                <h3>{plan.name}</h3><p>{plan.tagline}</p>
                <strong className="price-placeholder">价格将在正式上线前公布</strong>
                <ul>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <Link className={plan.featured ? "button" : "button button-secondary"} href="/contact">预约了解</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {siteConfig.showAcaDescription && (
        <section className="section ai-tech-section">
          <div className="shell ai-tech-grid">
            <div>
              <SectionHeading eyebrow="AI 能力规划" title="专业医疗 AI 能力，让健康数据更容易理解" description={statusCopy.aca} />
              <p className="status-line"><span />当前状态：能力规划阶段</p>
            </div>
            <div className="capability-orbit">
              {["健康趋势解释", "异常变化提示", "个性化建议", "健康目标推荐", "报告内容整理", "就医沟通参考"].map((item) => <span key={item}>{item}</span>)}
              <strong>AI<br /><small>规划能力</small></strong>
            </div>
          </div>
        </section>
      )}

      <section className="section privacy-section">
        <div className="shell">
          <SectionHeading center eyebrow="隐私与安全" title="健康数据值得被认真保护" description="官网当前不处理真实健康数据；康析产品将以明确授权、最小必要和用户可控为基本原则。" />
          <div className="privacy-grid">
            {[
              ["明确授权", "仅在用户明确授权后同步数据"],
              ["安全保护", "采用安全的数据传输和存储方式"],
              ["家庭边界", "家庭成员查看需要独立授权"],
              ["用户控制", "支持撤回授权与申请删除数据"],
            ].map(([title, text], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <div className="privacy-actions"><Link href="/privacy">查看隐私政策 →</Link><Link href="/health-disclaimer">查看健康免责声明 →</Link></div>
        </div>
      </section>

      <section className="section shell faq-section">
        <SectionHeading center eyebrow="常见问题" title="关于康析，你可能还想了解" />
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}><summary>{question}<span aria-hidden="true">＋</span></summary><p>{answer}</p></details>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="shell cta-inner">
          <div><span className="eyebrow">产品筹备中</span><h2>和泽康睿析一起，重新理解日常健康数据</h2><p>预约入口当前不收集健康数据。正式体验开放后，我们会通过官网公布。</p></div>
          <div><Link className="button button-light" href="/contact">预约产品体验 →</Link><Link href="/about">了解泽康睿析</Link></div>
        </div>
      </section>
    </main>
  );
}
