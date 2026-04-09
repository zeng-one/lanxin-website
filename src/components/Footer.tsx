import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-white text-base leading-tight">四川蓝信数联科技有限公司</div>
                <div className="text-xs text-blue-400 leading-tight">Sichuan Lanxin Digital Technology Co., Ltd.</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              专注于钉钉生态服务、软件开发与网站建设，为企业数字化转型提供专业技术解决方案。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">快速导航</h3>
            <ul className="space-y-2.5">
              {[
                { label: '首页', path: '/' },
                { label: '关于我们', path: '/about' },
                { label: '产品服务', path: '/services' },
                { label: '联系我们', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-150 cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="text-blue-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">400-xxx-xxxx</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="text-blue-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">contact@lanxin-tech.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-blue-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">四川省成都市高新区</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {currentYear} 四川蓝信数联科技有限公司 版权所有
          </p>
          <p className="text-xs text-slate-500">
            蜀ICP备XXXXXXXX号
          </p>
        </div>
      </div>
    </footer>
  )
}
