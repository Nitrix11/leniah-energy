import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react'
import { COMPANY, IMG } from '@/lib/brand'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/90 pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl bg-green-500/20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl bg-blue-500/20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-12 w-12 rounded-xl overflow-hidden bg-white/5">
                <img src={IMG.logo} alt="Leniah" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">LENIAH</div>
                <div className="text-[10px] tracking-[0.3em] text-white/60">ENERGY</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Powering Zimbabwe's sustainable future through innovative renewable energy and electrical engineering solutions.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white">Services</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {['Renewable Energy', 'Electrical Contracting', 'LP Gas Reticulation', 'Water Pumping Solutions', 'Solar Battery Storage'].map((s) => (
                <li key={s}><Link to="/services" className="hover:text-energy-yellow transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link to="/about" className="hover:text-energy-yellow transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-energy-yellow transition-colors">Projects</Link></li>
              <li><Link to="/projects" className="hover:text-energy-yellow transition-colors">Sustainability</Link></li>
              <li><Link to="/contact" className="hover:text-energy-yellow transition-colors">Contact</Link></li>
              <li><a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className="hover:text-energy-yellow transition-colors">WhatsApp Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-energy-yellow shrink-0" /><span>{COMPANY.address}</span></li>
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-energy-yellow shrink-0" /><a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-white">{COMPANY.phone}</a></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-energy-yellow shrink-0" /><a href={`mailto:${COMPANY.email}`} className="hover:text-white break-all">{COMPANY.email}</a></li>
            </ul>
            <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
              <label className="text-xs uppercase tracking-wider text-white/60">Newsletter</label>
              <div className="mt-2 flex">
                <input type="email" placeholder="you@example.com" className="flex-1 px-3 py-2 rounded-l-lg bg-white/5 border border-white/10 text-sm placeholder:text-white/30 focus:outline-none focus:border-energy-yellow" />
                <button className="px-4 rounded-r-lg bg-energy-yellow text-charcoal text-sm font-semibold hover:opacity-90">Join</button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>© {new Date().getFullYear()} {COMPANY.full}. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <span>{COMPANY.website}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
