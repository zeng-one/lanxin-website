import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, Shield, Zap, Target } from 'lucide-react'

const milestones = [
  { year: '2018', title: '公司成立', desc: '四川蓝信数联科技有限公司在成都高新区正式注册成立，专注IT技术服务。' },
  { year: '2019', title: '获得钉钉授权', desc: '成为钉钉官方授权服务商，开始为西南地区企业提供钉钉生态服务。' },
  { year: '2021', title: '软件开发部门成立', desc: '组建专业软件研发团队，承接企业级定制软件开发项目，服务客户突破100家。' },
  { year: '2023', title: '业务规模扩张', desc: '服务企业超200家，团队规模扩展至20余人，成为西南地区重要的数字化服务商。' },
  { year: '2025', title: '全面升级', desc: '推出一站式数字化转型解决方案，整合钉钉服务、软件开发、网站建设全业务线。' },
]

const values = [
  { icon: <Target size={22} className="text-blue-600" />, title: '以客户为中心', desc: '深入理解客户业务需求，提供真正解决问题的技术方案。' },
  { icon: <Shield size={22} className="text-blue-600" />, title: '专业可信赖', desc: '具备完整资质认证，每个项目严格执行，保障交付质量。' },
  { icon: <Zap size={22} className="text-blue-600" />, title: '高效响应', desc: '7×12小时技术支持，快速响应客户需求与紧急情况。' },
  { icon: <Users size={22} className="text-blue-600" />, title: '协作共赢', desc: '与客户建立长期合作关系，共同推进企业数字化进程。' },
]

const team = [
  { name: '张总监', role: '技术总监', exp: '10年+软件开发经验' },
  { name: '李经理', role: '钉钉服务负责人', exp: '钉钉官方认证工程师' },
  { name: '王工', role: '高级前端工程师', exp: '8年+Web开发经验' },
  { name: '陈经理', role: '项目管理负责人', exp: 'PMP认证项目经理' },
]

export default function About() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
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
              关于我们
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              专注数字化服务
              <br />
              <span className="text-blue-300">深耕西南市场</span>
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              蓝信数联自2018年成立以来，始终专注于为西南地区企业提供专业、可靠的数字化技术服务。
            </p>
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium mb-4">
                公司简介
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">
                四川蓝信数联科技有限公司
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                四川蓝信数联科技有限公司是一家专注于企业数字化服务的高新技术企业，总部位于成都高新区。
                公司以钉钉生态服务为核心，融合软件定制开发和网站建设能力，为企业提供一站式数字化转型解决方案。
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                作为阿里钉钉官方授权服务商，我们深度理解企业协同办公需求，帮助200余家企业完成数字化升级。
                团队核心成员均拥有10年以上的行业经验，致力于用技术驱动企业效率提升。
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['钉钉官方授权商', '高新技术企业', '软件企业认定', 'ISO质量认证'].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200">
                    <CheckCircle size={12} />
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl transition-all duration-200 shadow-md cursor-pointer"
              >
                联系我们 <ArrowRight size={18} />
              </Link>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { num: '2018', label: '成立年份', sub: '深耕行业7年+' },
                { num: '200+', label: '服务企业', sub: '遍布西南地区' },
                { num: '20+', label: '专业团队', sub: '资深技术专家' },
                { num: '98%', label: '满意度', sub: '持续好评' },
              ].map((item) => (
                <div key={item.label} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="text-3xl font-black text-blue-700 mb-1">{item.num}</div>
                  <div className="text-sm font-semibold text-slate-800 mb-0.5">{item.label}</div>
                  <div className="text-xs text-slate-500">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-medium mb-4">
              企业价值观
            </div>
            <h2 className="text-3xl font-bold text-slate-900">我们的核心理念</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => (
              <div key={val.title} className="bg-white rounded-2xl p-6 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-default">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  {val.icon}
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{val.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium mb-4">
              发展历程
            </div>
            <h2 className="text-3xl font-bold text-slate-900">一路走来，步步为营</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-16 sm:left-1/2 top-0 bottom-0 w-px bg-blue-200 -translate-x-1/2"></div>

            <div className="space-y-10">
              {milestones.map((milestone, idx) => (
                <div
                  key={milestone.year}
                  className={`relative flex gap-8 ${idx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-center`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${idx % 2 === 0 ? 'sm:text-right sm:pr-10' : 'sm:text-left sm:pl-10'} pl-24 sm:pl-0`}>
                    <div className="bg-white border border-blue-100 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                      <div className="text-xs font-bold text-blue-600 mb-1">{milestone.year}</div>
                      <div className="text-base font-semibold text-slate-900 mb-1.5">{milestone.title}</div>
                      <div className="text-sm text-slate-500 leading-relaxed">{milestone.desc}</div>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-16 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md z-10 ring-2 ring-blue-200"></div>

                  {/* Spacer */}
                  <div className="flex-1 hidden sm:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-medium mb-4">
              核心团队
            </div>
            <h2 className="text-3xl font-bold text-slate-900">专业团队，值得信赖</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 border border-blue-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-200 to-blue-400 mx-auto mb-4 flex items-center justify-center">
                  <Users size={28} className="text-blue-700" />
                </div>
                <div className="text-base font-semibold text-slate-900 mb-1">{member.name}</div>
                <div className="text-xs font-medium text-blue-700 mb-2">{member.role}</div>
                <div className="text-xs text-slate-500">{member.exp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
