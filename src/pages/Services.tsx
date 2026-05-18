import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Monitor, Code, Globe, Users, Zap, Shield, Star, Cpu } from 'lucide-react'

const services = [
  {
    id: 'ai',
    icon: <Cpu size={32} className="text-violet-600" />,
    tag: 'AI 落地',
    title: 'AI 落地服务',
    subtitle: '企业AI转型，一站式赋能',
    desc: '从AI内容创作、智能客服到私有化部署，为企业提供全链路AI能力落地支撑。帮助企业在营销、客服、运营、管理等核心场景快速接入AI，实现降本增效，抢占AI时代先机。',
    features: [
      'AI内容创作：文案、海报、短视频、数字人',
      '智能客服与知识库：官网/企微AI客服、企业私有知识库',
      'RPA+AI办公自动化：自动报表、自动对账、报税、数据爬取',
      '企业AI搜索优化：百度+AI引擎品牌占位、官网AI收录',
      '大模型私有化部署与微调：私有AI、行业模型',
      'AI咨询与培训：企业AI转型规划、员工AI技能培训',
    ],
    cases: ['某科技公司官网AI客服上线', '连锁餐饮集团RPA自动对账系统', '某制造企业行业大模型私有化部署'],
    color: 'violet',
    bgGradient: 'from-violet-600 to-purple-700',
    lightBg: 'from-violet-50 to-purple-100',
    border: 'border-violet-200',
    tagColor: 'bg-violet-100 text-violet-700 border-violet-200',
  },
  {
    id: 'dingtalk',
    icon: <Monitor size={32} className="text-blue-600" />,
    tag: '官方授权',
    title: '钉钉代理服务',
    subtitle: '阿里钉钉官方授权服务商',
    desc: '作为阿里钉钉官方授权一级服务商，我们为企业提供钉钉企业版的采购、实施部署、定制开发和培训运营全链路服务，帮助企业快速实现移动办公和数字化协同。',
    features: [
      '钉钉企业版授权采购及报价',
      '企业组织架构搭建与配置',
      '钉钉应用定制化开发（H5/小程序）',
      '员工培训与系统推广',
      '钉钉与现有系统对接集成',
      '7×12小时专属售后支持',
    ],
    cases: ['某制造企业5000人钉钉部署', '连锁零售品牌全国协同办公', '政府单位内部流程数字化'],
    color: 'blue',
    bgGradient: 'from-blue-600 to-blue-800',
    lightBg: 'from-blue-50 to-blue-100',
    border: 'border-blue-200',
    tagColor: 'bg-blue-100 text-blue-700 border-blue-200',
  },
  {
    id: 'software',
    icon: <Code size={32} className="text-indigo-600" />,
    tag: '定制开发',
    title: '软件定制开发',
    subtitle: '业务驱动，技术赋能',
    desc: '深入理解客户业务场景，提供从需求分析、系统设计到开发交付的全流程定制软件开发服务。覆盖Web应用、移动端APP、企业管理系统等多种类型。',
    features: [
      'ERP / OA / CRM 企业管理系统',
      '微信小程序 / 支付宝小程序开发',
      'iOS / Android 原生及跨平台APP',
      '数据可视化大屏与BI报表',
      'API接口开发与系统集成',
      '项目交付后免费维护一年',
    ],
    cases: ['某物流公司运输管理系统', '教培机构学员管理小程序', '连锁餐饮集团数据中台'],
    color: 'indigo',
    bgGradient: 'from-indigo-600 to-indigo-800',
    lightBg: 'from-indigo-50 to-indigo-100',
    border: 'border-indigo-200',
    tagColor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
  },
  {
    id: 'website',
    icon: <Globe size={32} className="text-sky-600" />,
    tag: '建站服务',
    title: '网站建设',
    subtitle: '专业建站，品牌赋能',
    desc: '为企业打造专业、美观、高性能的企业官网、电商平台和行业门户。全响应式设计，SEO友好，帮助企业提升线上品牌影响力，获取更多商业机会。',
    features: [
      '企业官网 / 品牌展示网站',
      '电商平台 / 商城系统建设',
      '响应式设计，兼容所有设备',
      'SEO搜索引擎优化',
      '网站安全防护与维护',
      '域名、服务器、备案一站式办理',
    ],
    cases: ['某律师事务所品牌官网', '工业产品企业外贸站', '本地生活服务平台'],
    color: 'sky',
    bgGradient: 'from-sky-600 to-sky-800',
    lightBg: 'from-sky-50 to-sky-100',
    border: 'border-sky-200',
    tagColor: 'bg-sky-100 text-sky-700 border-sky-200',
  },
]

const process = [
  { step: '01', title: '需求沟通', desc: '深入了解您的业务目标和具体需求，明确项目范围。' },
  { step: '02', title: '方案规划', desc: '制定技术方案和项目计划，提供详细报价。' },
  { step: '03', title: '设计开发', desc: '专业团队按计划推进，定期汇报进度。' },
  { step: '04', title: '测试交付', desc: '严格测试后交付，并提供培训和文档。' },
  { step: '05', title: '持续支持', desc: '交付后提供长期技术支持和迭代优化。' },
]

const reasons = [
  { icon: <Star size={20} className="text-yellow-500" />, title: '官方资质认证', desc: '钉钉官方授权服务商，资质齐全可查。' },
  { icon: <Users size={20} className="text-blue-500" />, title: '经验丰富团队', desc: '核心成员10年+行业经验，案例丰富。' },
  { icon: <Shield size={20} className="text-green-500" />, title: '交付质量保障', desc: '严格项目管理，按时高质交付。' },
  { icon: <Zap size={20} className="text-orange-500" />, title: '快速响应服务', desc: '7×12小时在线，问题快速响应解决。' },
]

export default function Services() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-medium mb-5">
              产品与服务
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              一站式数字化
              <br />
              <span className="text-blue-300">技术解决方案</span>
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              钉钉代理 · 软件开发 · 网站建设 · AI落地，四大核心服务助力您的企业数字化转型。
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Text side */}
              <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${service.tagColor}`}>
                  {service.tag}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">{service.title}</h2>
                <p className="text-sm text-slate-500 mb-4">{service.subtitle}</p>
                <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2">
                      <CheckCircle size={15} className="text-green-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-700">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Cases */}
                <div className="mb-7">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">成功案例</div>
                  <div className="flex flex-wrap gap-2">
                    {service.cases.map((c) => (
                      <span key={c} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full border border-slate-200">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl transition-all duration-200 shadow-md cursor-pointer"
                >
                  咨询此服务 <ArrowRight size={17} />
                </Link>
              </div>

              {/* Visual side */}
              <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className={`relative bg-gradient-to-br ${service.bgGradient} rounded-2xl p-8 shadow-xl overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/4 translate-x-1/4"></div>
                  <div className="absolute bottom-0 left-0 w-36 h-36 bg-white/5 rounded-full translate-y-1/4 -translate-x-1/4"></div>
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-5">
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/70 text-sm mb-6">{service.subtitle}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.slice(0, 4).map((feat) => (
                        <div key={feat} className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 border border-white/10">
                          <CheckCircle size={13} className="text-green-400 shrink-0" />
                          <span className="text-xs text-white/90 leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-medium mb-4">
              服务流程
            </div>
            <h2 className="text-3xl font-bold text-slate-900">标准化服务，全程有保障</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="relative text-center">
                {/* Arrow connector */}
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-full w-full h-px border-t-2 border-dashed border-blue-200 -translate-x-1/2 z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-700 text-white font-black text-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                    {p.step}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900">为什么选择蓝信数联</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map((r) => (
              <div key={r.title} className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 cursor-default">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                  {r.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">{r.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            有项目想法？立刻和我们聊聊
          </h2>
          <p className="text-blue-200 mb-8">免费需求评估，专业方案定制，响应不超过24小时</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg cursor-pointer"
          >
            免费咨询 <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
