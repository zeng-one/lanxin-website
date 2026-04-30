import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, LogIn } from 'lucide-react'

const navItems = [
  { label: '首页', path: '/' },
  { label: '关于我们', path: '/about' },
  { label: '产品服务', path: '/services' },
  { label: '联系我们', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-blue-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-md group-hover:shadow-blue-300 transition-shadow duration-200">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <div>
              <div className={`font-bold text-base leading-tight transition-colors duration-200 ${scrolled ? 'text-blue-900' : 'text-white'}`}>
                蓝信数联
              </div>
              <div className={`text-xs leading-tight transition-colors duration-200 ${scrolled ? 'text-blue-500' : 'text-blue-200'}`}>
                科技服务专家
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  location.pathname === item.path
                    ? scrolled
                      ? 'bg-blue-50 text-blue-700'
                      : 'bg-white/20 text-white'
                    : scrolled
                    ? 'text-slate-600 hover:text-blue-700 hover:bg-blue-50'
                    : 'text-white/90 hover:text-white hover:bg-white/15'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-orange-300 cursor-pointer"
            >
              立即咨询
            </Link>
            <a
              href="https://cloud.lanxinsl.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-orange-300 cursor-pointer flex items-center gap-1.5"
            >
              <LogIn size={16} />
              登录
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 cursor-pointer ${
              scrolled ? 'text-blue-800 hover:bg-blue-50' : 'text-white hover:bg-white/15'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="切换菜单"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-blue-100 px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 cursor-pointer ${
                location.pathname === item.path
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-slate-700 hover:text-blue-700 hover:bg-blue-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block w-full text-center mt-2 px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors duration-150 cursor-pointer"
          >
            立即咨询
          </Link>
          <a
            href="https://cloud.lanxinsl.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center mt-2 px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors duration-150 flex items-center justify-center gap-1.5"
          >
            <LogIn size={16} />
            登录
          </a>
        </div>
      </div>
    </header>
  )
}
