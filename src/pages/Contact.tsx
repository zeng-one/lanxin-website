import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle, Send } from 'lucide-react'

const contactInfo = [
  {
    icon: <Phone size={22} className="text-blue-600" />,
    title: '电话咨询',
    lines: ['028-67878802'],
    sub: '周一至周六 9:00-21:00',
  },
  {
    icon: <Mail size={22} className="text-blue-600" />,
    title: '邮件联系',
    lines: ['contact@lanxin-tech.com', 'bd@lanxin-tech.com'],
    sub: '24小时内回复',
  },
  {
    icon: <MapPin size={22} className="text-blue-600" />,
    title: '公司地址',
    lines: ['成都市武侯区环球中心N3-1720'],
    sub: '欢迎来访洽谈',
  },
  {
    icon: <Clock size={22} className="text-blue-600" />,
    title: '工作时间',
    lines: ['周一至周六 9:00-21:00', '节假日值班响应'],
    sub: '7×12小时在线支持',
  },
]

const serviceOptions = ['AI 落地服务', '钉钉代理服务', '软件定制开发', '网站建设', '系统集成', '其他咨询']

type FormState = {
  name: string
  company: string
  phone: string
  email: string
  service: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('https://lanxinsl.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          company: form.company,
          message: form.message || form.service,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitted(true)
      } else {
        setError(result.error || '提交失败，请稍后重试')
      }
    } catch (err) {
      setError('网络错误，请检查网络连接')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
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
              联系我们
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              随时随地
              <br />
              <span className="text-blue-300">与我们取得联系</span>
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              有任何问题或合作意向，欢迎通过以下方式联系我们，我们将在24小时内回复。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-default group"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center mb-4 transition-colors duration-200">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">{item.title}</h3>
                {item.lines.map((line) => (
                  <p key={line} className="text-sm text-slate-700 font-medium leading-relaxed">{line}</p>
                ))}
                <p className="text-xs text-slate-400 mt-2">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-6 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-blue-100 shadow-sm p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                    <MessageSquare size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">在线留言咨询</h2>
                    <p className="text-xs text-slate-500">填写信息，我们尽快与您联系</p>
                  </div>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">提交成功！</h3>
                    <p className="text-slate-500 text-sm mb-6">
                      感谢您的留言，我们将在24小时内与您联系。
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', company: '', phone: '', email: '', service: '', message: '' }) }}
                      className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium rounded-xl transition-colors duration-200 cursor-pointer"
                    >
                      再次提交
                    </button>
                  </div>
                ) : (
                  <>
                  {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                      {error}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="name">
                          您的姓名 <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="请输入姓名"
                          className="w-full px-4 py-2.5 text-sm text-slate-900 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-slate-50 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="company">
                          公司名称
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="请输入公司名称"
                          className="w-full px-4 py-2.5 text-sm text-slate-900 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-slate-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="phone">
                          联系电话 <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="请输入手机号码"
                          className="w-full px-4 py-2.5 text-sm text-slate-900 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-slate-50 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="email">
                          电子邮箱
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="请输入邮箱地址"
                          className="w-full px-4 py-2.5 text-sm text-slate-900 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-slate-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="service">
                        咨询服务
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm text-slate-900 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-slate-50 focus:bg-white cursor-pointer"
                      >
                        <option value="">请选择服务类型</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="message">
                        需求描述
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="请描述您的需求或问题，我们将为您提供针对性的解决方案..."
                        className="w-full px-4 py-2.5 text-sm text-slate-900 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-slate-50 focus:bg-white resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-blue-300 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          提交中...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          提交留言
                        </>
                      )}
                    </button>
                  </form>
                  </>
                )}
              </div>
            </div>

            {/* Right: Map + QR */}
            <div className="lg:col-span-2 space-y-5">
              {/* Map placeholder */}
              <div className="bg-white rounded-2xl border border-blue-100 overflow-hidden shadow-sm">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 h-52 flex flex-col items-center justify-center gap-3 relative">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-blue-900">四川蓝信数联科技有限公司</div>
                    <div className="text-xs text-blue-600 mt-1">成都市武侯区环球中心N3-1720</div>
                  </div>
                  {/* Decorative rings */}
                  <div className="absolute w-16 h-16 rounded-full border-2 border-blue-300/50 animate-ping" style={{ animationDuration: '2s' }}></div>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={15} className="text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-slate-800">成都市武侯区环球中心</div>
                      <div className="text-xs text-slate-500 mt-0.5">N3-1720</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WeChat / QR */}
              <div className="bg-white rounded-2xl border border-blue-100 p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">微信扫码咨询</h3>
                <p className="text-xs text-slate-500 mb-4">添加企业微信，获取专属顾问服务</p>
                <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl h-36 border border-blue-100">
                  <div className="text-center">
                    <div className="grid grid-cols-4 gap-1 mb-2 mx-auto w-fit">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-4 h-4 rounded-sm ${
                            [0,1,2,3,4,7,8,11,12,13,14,15,5,10,6,9][i] % 3 === 0
                              ? 'bg-blue-700'
                              : [0,1,2,3,4,7,8,11,12,13,14,15,5,10,6,9][i] % 3 === 1
                              ? 'bg-blue-400'
                              : 'bg-blue-100'
                          }`}
                        ></div>
                      ))}
                    </div>
                    <div className="text-xs text-slate-500">扫码添加企业微信</div>
                  </div>
                </div>
              </div>

              {/* Quick contact */}
              <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-6 text-white">
                <h3 className="text-sm font-bold mb-1">急需技术支持？</h3>
                <p className="text-xs text-blue-200 mb-4">拨打热线，立即获得专业帮助</p>
                <a
                  href="tel:028-67878802"
                  className="flex items-center gap-2 px-4 py-3 bg-white/15 hover:bg-white/25 border border-white/20 rounded-xl transition-all duration-200 cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                    <Phone size={15} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">028-67878802</div>
                    <div className="text-xs text-blue-200">服务热线，立即拨打</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
