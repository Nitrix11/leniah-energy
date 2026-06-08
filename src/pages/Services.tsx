import { Sun, Zap, Flame, Droplets, Check, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { COMPANY, IMG } from '@/lib/brand'

const services = [
  {
    id: 'renewable', icon: Sun, color: '#E8B10A',
    title: 'Renewable Energy', tag: 'Solar PV · Storage · Solar Farms', img: IMG.solarArray,
    intro: 'Tier-1 solar systems engineered for Zimbabwean conditions, from residential rooftops to utility-scale solar farms.',
    items: ['Solar PV Systems', 'Commercial Solar', 'Industrial Solar', 'Solar Farms', 'Battery Storage Systems', 'Solar Maintenance'],
    benefits: ['Lower energy costs from day one', 'ZESA grid independence', '20-25 year panel lifetime', 'Premium inverters and storage'],
    process: ['Site assessment & energy audit', 'Custom system design', 'Procurement of tier-1 components', 'Professional installation', 'Commissioning & handover', 'Ongoing maintenance'],
  },
  {
    id: 'electrical', icon: Zap, color: '#2196F3',
    title: 'Electrical Contracting', tag: 'Powerlines · Substations · Installations', img: IMG.transformer,
    intro: 'Full-scope electrical engineering — from domestic wiring to high-voltage substation construction.',
    items: ['Overhead Powerline Construction', 'Substation Works', 'Industrial Installations', 'Commercial Installations', 'Domestic Installations', 'Electrical Maintenance', 'Testing & Commissioning', 'Audit & Survey Services'],
    benefits: ['ZERA-compliant engineering', 'Certified HV/LV technicians', 'Minimal downtime delivery', 'Full testing & commissioning'],
    process: ['Survey & load study', 'Single-line design & approvals', 'Material procurement', 'Construction & install', 'Testing & commissioning', 'Compliance documentation'],
  },
  {
    id: 'lpg', icon: Flame, color: '#E53935',
    title: 'LP Gas Reticulation', tag: 'Design · Install · Maintain', img: IMG.lpg,
    intro: 'Safe, certified LPG systems for kitchens, restaurants, hospitals and industrial process heat.',
    items: ['LPG System Design', 'LPG Installation', 'LPG Maintenance', 'Commercial LPG Systems', 'Industrial LPG Systems', 'Consultation Services'],
    benefits: ['Certified gas-safe engineers', 'Compliant cylinder cages & safety shut-offs', 'Right-sized for your demand', 'Scheduled maintenance plans'],
    process: ['Load and layout consultation', 'Detailed design', 'Permits & compliance', 'Pipework & cylinder install', 'Leak testing & commissioning', 'Maintenance contract'],
  },
  {
    id: 'water', icon: Droplets, color: '#4CAF50',
    title: 'Water Pumping Solutions', tag: 'Boreholes · Solar Pumps · Storage', img: IMG.waterTanks,
    intro: 'Reliable water delivery for households, farms and industry — increasingly powered by solar.',
    items: ['Borehole Pump Systems', 'Agricultural Water Pumping', 'Industrial Water Pumping', 'Solar Water Pumping', 'Water Storage Solutions', 'Maintenance Services'],
    benefits: ['Off-grid water security', 'Solar-driven, zero fuel cost', 'Right-sized storage', 'Long-life pump selection'],
    process: ['Yield test & water demand study', 'Pump & storage sizing', 'Solar array (where applicable)', 'Install pump, pipework & tanks', 'Commissioning', 'Service plan'],
  },
]

export default function Services() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(33,150,243,0.5), transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(232,177,10,0.4), transparent 60%)' }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-sm font-semibold tracking-widest uppercase text-energy-yellow mb-6">Our Services</div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight max-w-4xl">
              Four practices. <span className="text-gradient-brand">One accountable partner.</span>
            </h1>
            <p className="mt-8 text-xl text-white/70 max-w-2xl leading-relaxed">
              From rooftop solar to live substations, LPG reticulation to solar boreholes — we deliver the full energy stack.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {services.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium hover:bg-white/10 transition">
                  <s.icon className="h-4 w-4" style={{ color: s.color }} />{s.title}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {services.map((s, idx) => (
        <section key={s.id} id={s.id} className={`py-32 ${idx % 2 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className={`grid lg:grid-cols-12 gap-12 items-start ${idx % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <Reveal className="lg:col-span-5">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
                </div>
              </Reveal>
              <Reveal className="lg:col-span-7" delay={0.1}>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="h-14 w-14 rounded-2xl flex items-center justify-center" style={{ background: s.color }}>
                    <s.icon className="h-7 w-7 text-charcoal" />
                  </div>
                  <div className="text-xs uppercase tracking-widest font-semibold text-gray-400">{s.tag}</div>
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">{s.title}</h2>
                <p className="mt-6 text-lg text-gray-500 leading-relaxed">{s.intro}</p>

                <div className="mt-10 grid sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-display text-lg font-bold mb-4">What we deliver</h3>
                    <ul className="space-y-2">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 mt-0.5 text-renewable-green shrink-0" />{it}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold mb-4">Benefits</h3>
                    <ul className="space-y-2">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 mt-0.5 text-renewable-green shrink-0" />{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 p-6 rounded-2xl bg-gray-50 border border-gray-200">
                  <h3 className="font-display text-lg font-bold mb-4">Our process</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {s.process.map((p, i) => (
                      <div key={p} className="flex items-start gap-3 text-sm">
                        <div className="h-6 w-6 rounded-full bg-charcoal text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</div>
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer"
                  className="mt-10 inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-charcoal text-white font-semibold hover:bg-charcoal/90 transition-all">
                  Request a quote <ArrowRight className="h-4 w-4" />
                </a>
              </Reveal>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
