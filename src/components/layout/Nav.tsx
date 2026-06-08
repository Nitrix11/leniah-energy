import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { IMG, COMPANY } from '@/lib/brand'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500 ${scrolled ? 'glass-light rounded-2xl shadow-lg' : 'bg-transparent'}`}>
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl overflow-hidden ring-1 ring-white/20 bg-charcoal flex items-center justify-center">
              <img src={IMG.logo} alt="Leniah Energy" className="h-full w-full object-cover" />
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="font-display font-bold text-base tracking-tight">LENIAH</div>
              <div className="text-[10px] tracking-[0.3em] text-gray-500 -mt-0.5">ENERGY</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? 'text-charcoal bg-gray-100 font-semibold' : 'text-gray-600 hover:text-charcoal hover:bg-gray-50'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-charcoal text-white text-sm font-semibold hover:bg-charcoal/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Request Quote
            </a>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-gray-100" aria-label="Menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-gray-200 mt-2 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg hover:bg-gray-100 text-sm font-medium">
                  {l.label}
                </Link>
              ))}
              <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className="mt-2 px-4 py-3 rounded-lg bg-charcoal text-white text-sm font-semibold text-center">
                Request Quote on WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
