import { Link } from 'react-router-dom'
import { Leaf, TrendingUp, Users, Globe, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { IMG } from '@/lib/brand'

const projects = [
  { img: IMG.solarArray,        tag: 'Commercial Solar',    title: 'Rooftop PV Array',               location: 'Harare, Zimbabwe', size: '120 kWp' },
  { img: IMG.transformerInstall,tag: 'Substation',          title: 'Distribution Transformer Install', location: 'Mashonaland',      size: '200 kVA' },
  { img: IMG.inverter,          tag: 'Hybrid Storage',      title: 'Inverter & Battery Backup',        location: 'Hatfield',         size: '10 kW / 15 kWh' },
  { img: IMG.waterTanks,        tag: 'Water Pumping',       title: 'Triple-tank Borehole System',      location: 'Rural Estate',     size: '15,000 L' },
  { img: IMG.switchgear,        tag: 'Industrial',          title: 'Switchgear Panel Build',           location: 'Industrial Site',  size: '3-phase' },
  { img: IMG.lpg,               tag: 'LP Gas',              title: 'Commercial LPG Reticulation',      location: 'Hospitality Client', size: '2 × 48 kg' },
  { img: IMG.substation,        tag: 'Powerlines',          title: 'HV Substation Works',              location: 'National Grid',    size: '11 kV' },
  { img: IMG.solarInstall,      tag: 'Solar + Water Heater',title: 'Residential Hybrid Install',       location: 'Greater Harare',   size: '5 kW' },
]

export default function Projects() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(76,175,80,0.5), transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(232,177,10,0.4), transparent 60%)' }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-sm font-semibold tracking-widest uppercase text-energy-yellow mb-6">Projects & Sustainability</div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight max-w-4xl">
              Real systems. <span className="text-gradient-brand">Measurable impact.</span>
            </h1>
            <p className="mt-8 text-xl text-white/70 max-w-2xl leading-relaxed">
              Every project we deliver moves Zimbabwe closer to a cleaner, more resilient energy future.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-16">Featured projects</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((p, i) => (
              <Reveal key={i} delay={(i % 4) * 0.08}>
                <div className="group relative overflow-hidden rounded-2xl border border-gray-200 h-full">
                  <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                    <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                    <span className="text-[10px] uppercase tracking-widest text-energy-yellow font-semibold">{p.tag}</span>
                    <h3 className="font-display text-lg font-bold mt-1">{p.title}</h3>
                    <div className="mt-1 text-xs text-white/70">{p.location} · {p.size}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200">
              <img src={IMG.transformerInstall} alt="Case study" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="text-sm font-semibold tracking-widest uppercase text-renewable-green mb-4">Case Study</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">Rural transformer install — community electrified.</h2>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              Leniah Energy designed, procured and commissioned a pole-mounted distribution transformer for a peri-urban community — extending reliable single- and three-phase power to homes, businesses and a borehole pump station.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[{ v: '200kVA', l: 'Transformer' }, { v: '11kV', l: 'HV side' }, { v: '<48h', l: 'Energisation' }].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-bold text-gradient-brand">{s.v}</div>
                  <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(76,175,80,0.3), transparent 60%)' }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-sm font-semibold tracking-widest uppercase text-energy-yellow mb-4">Renewable Impact</div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold">Energy, measured in outcomes.</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[{ v: '2.4 MW', l: 'Solar installed' }, { v: '1,800t', l: 'CO₂ avoided / yr' }, { v: '500+', l: 'Clients served' }, { v: '98%', l: 'On-time delivery' }].map((s) => (
              <Reveal key={s.l}>
                <div>
                  <div className="font-display text-5xl lg:text-6xl font-bold text-gradient-brand">{s.v}</div>
                  <div className="mt-3 text-sm uppercase tracking-wider text-white/60">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ESG */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <div className="text-sm font-semibold tracking-widest uppercase text-renewable-green mb-4">ESG Commitments</div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold">Environment, society, governance.</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Leaf,        title: 'Environment', body: 'Every system is designed to reduce grid dependency and lifetime emissions. We recycle batteries and panels through certified partners.' },
              { icon: Users,       title: 'Society',     body: 'We hire and train Zimbabwean technicians, support community electrification and contribute to local skills development.' },
              { icon: TrendingUp,  title: 'Governance',  body: 'Transparent contracts, ZERA compliance and rigorous internal QHSE standards on every project.' },
            ].map((e, i) => (
              <Reveal key={e.title} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 h-full">
                  <e.icon className="h-10 w-10 text-energy-yellow mb-6" />
                  <h3 className="font-display text-2xl font-bold">{e.title}</h3>
                  <p className="mt-4 text-gray-500">{e.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <Globe className="h-12 w-12 text-renewable-green mb-6" />
            <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">Powering communities, not just buildings.</h2>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              We believe energy access is a foundation for human flourishing. From solar-powered boreholes that deliver clean water, to rural electrification that keeps children studying after sunset — our work is intentionally aimed at the people it serves.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-charcoal text-white font-semibold hover:bg-charcoal/90 transition-all">
              Partner with us <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200">
              <img src={IMG.waterTanks} alt="Community impact" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
