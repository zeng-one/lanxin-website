import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, Code, Monitor, Globe, Shield, Zap, ChevronRight, Cpu } from 'lucide-react'

const services = [
  {
    icon: <Cpu size={28} className="text-violet-600" />,
    title: 'AI 落地服务',
    desc: '从AI内容创作、智能客服到私有化部署，为企业提供全链路AI能力落地支撑，助力降本增效。',
    color: 'from-violet-50 to-purple-100',
    border: 'border-violet-200',
  },
  {
    icon: <Monitor size={28} className="text-blue-600" />,
    title: '钉钉代理服务',
    desc: '作为钉钉官方授权服务商，提供钉钉企业版采购、部署、培训及售后全链路服务。',
    color: 'from-blue-50 to-blue-100',
    border: 'border-blue-200',
  },
  {
    icon: <Code size={28} className="text-indigo-600" />,
    title: '软件定制开发',
    desc: '基于企业需求，提供ERP、OA、小程序、APP等各类软件定制开发，助力业务数字化。',
    color: 'from-indigo-50 to-indigo-100',
    border: 'border-indigo-200',
  },
  {
    icon: <Globe size={28} className="text-sky-600" />,
    title: '网站建设',
    desc: '专业企业官网、电商平台、行业门户建设，响应式设计，SEO优化，助力品牌线上展示。',
    color: 'from-sky-50 to-sky-100',
    border: 'border-sky-200',
  },
]

const stats = [
  { value: '200+', label: '服务企业', icon: <Users size={20} className="text-blue-500" /> },
  { value: '98%', label: '客户好评', icon: <CheckCircle size={20} className="text-blue-500" /> },
  { value: '5年+', label: '行业经验', icon: <Shield size={20} className="text-blue-500" /> },
  { value: '24h', label: '响应支持', icon: <Zap size={20} className="text-blue-500" /> },
]

const advantages = [
  { title: '专业团队', desc: '拥有多年行业经验的技术专家，深入理解企业需求。' },
  { title: '钉钉授权', desc: '钉钉官方授权服务商，资质齐全，服务有保障。' },
  { title: '交付保证', desc: '严格的项目管理流程，按时按质交付每一个项目。' },
  { title: '持续服务', desc: '项目交付后提供完善的售后支持和持续优化服务。' },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-600/30 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-indigo-700/30 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5"></div>
          {/* Grid lines */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-medium mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              钉钉官方授权服务商
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              赋能企业
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                数字化转型
              </span>
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-xl">
              四川蓝信数联科技，专注钉钉代理服务、软件定制开发、网站建设与 AI 落地服务，
              为企业提供一站式数字化技术解决方案。
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-orange-500/30 cursor-pointer"
              >
                立即咨询
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium rounded-xl transition-all duration-200 backdrop-blur-sm cursor-pointer"
              >
                了解服务
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 px-6 py-5">
                  {stat.icon}
                  <div>
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-blue-200">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium mb-4">
              我们的服务
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              专业技术服务，助力业务增长
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              从企业数字化工具到定制软件开发，蓝信数联提供全方位技术支持
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className={`group relative p-7 rounded-2xl bg-gradient-to-br ${service.color} border ${service.border} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/70 flex items-center justify-center mb-5 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{service.desc}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-sm text-blue-700 font-medium group-hover:gap-2.5 transition-all duration-200 cursor-pointer"
                >
                  了解详情 <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-medium mb-4">
                为什么选择我们
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-5">
                专注技术服务
                <br />
                <span className="text-blue-700">值得信赖的合作伙伴</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                蓝信数联深耕西南地区企业数字化市场多年，积累了丰富的行业经验和成功案例，
                是众多企业数字化转型的可靠伙伴。
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {advantages.map((adv) => (
                  <div key={adv.title} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-blue-100 hover:border-blue-300 transition-colors duration-200">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-800 mb-0.5">{adv.title}</div>
                      <div className="text-xs text-slate-500 leading-relaxed">{adv.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visual card */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 shadow-2xl overflow-hidden">
                {/* Decorations */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/4 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/4 -translate-x-1/4"></div>

                <div className="relative">
                  <div className="text-white/80 text-sm font-medium mb-6">钉钉核心服务资质</div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: '钉钉官方授权', sub: '一级服务商' },
                      { label: '项目完成率', sub: '100%' },
                      { label: '服务企业', sub: '200+ 家' },
                      { label: '技术工程师', sub: '20+ 人' },
                    ].map((item) => (
                      <div key={item.label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                        <div className="text-xl font-bold text-white mb-1">{item.sub}</div>
                        <div className="text-xs text-blue-200">{item.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/10 rounded-xl px-4 py-3 flex items-center gap-3 border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0"></div>
                    <span className="text-sm text-white/90">7×12小时在线技术支持</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-orange-500 text-white text-xs font-bold rounded-2xl px-4 py-3 shadow-xl">
                <div className="text-center">
                  <div className="text-lg font-black">5年+</div>
                  <div className="opacity-90">行业经验</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            准备好开启您的数字化之旅了吗？
          </h2>
          <p className="text-blue-200 mb-8">
            联系我们，获取免费需求评估和专业解决方案咨询
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg cursor-pointer"
            >
              免费咨询
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium rounded-xl transition-all duration-200 cursor-pointer"
            >
              查看服务
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
