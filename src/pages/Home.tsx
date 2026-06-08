import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sun, Zap, Flame, Droplets, ShieldCheck, Sparkles, Award, Users, TrendingUp, Quote } from 'lucide-react'
import { COMPANY, IMG } from '@/lib/brand'
import { EnergyOrb } from '@/components/EnergyOrb'
import { Reveal } from '@/components/Reveal'

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [v, setV] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now()
        const tick = (now: number) => {
          const p = Math.min((now - start) / 1600, 1)
          setV(Math.floor(to * (1 - Math.pow(1 - p, 3))))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        obs.disconnect()
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [to])
  return <span ref={ref}>{v}{suffix}</span>
}

const services = [
  { icon: Sun, title: 'Renewable Energy', desc: 'Solar PV, battery storage and solar farms engineered for performance.', color: '#E8B10A', img: IMG.solarArray },
  { icon: Zap, title: 'Electrical Contracting', desc: 'Powerlines, substations and end-to-end electrical installations.', color: '#2196F3', img: IMG.transformer },
  { icon: Flame, title: 'LP Gas Reticulation', desc: 'Safe, certified LPG design, installation and maintenance.', color: '#E53935', img: IMG.lpg },
  { icon: Droplets, title: 'Water Pumping Solutions', desc: 'Solar-powered boreholes and industrial water systems.', color: '#4CAF50', img: IMG.waterTanks },
]

const stats = [
  { value: 250, suffix: '+', label: 'Projects Completed' },
  { value: 180, suffix: '+', label: 'Solar Systems Installed' },
  { value: 500, suffix: '+', label: 'Happy Clients' },
  { value: 8, suffix: 'yrs', label: 'Industry Experience' },
]

const whyUs = [
  { icon: Award, title: 'Certified expertise', body: 'Qualified engineers and technicians backed by industry certifications and rigorous standards.' },
  { icon: ShieldCheck, title: 'Uncompromising safety', body: 'Zero-harm culture across every installation, from rooftop solar to live substations.' },
  { icon: Sparkles, title: 'Premium components', body: 'Tier-1 panels, inverters and switchgear — no shortcuts on the materials that protect your investment.' },
  { icon: Users, title: 'Local, accountable team', body: 'Zimbabwean owned and operated. Your project lead is a phone call away.' },
  { icon: TrendingUp, title: 'Sustainable ROI', body: 'Systems designed for performance, longevity and measurable savings on your energy bill.' },
]

const projects = [
  { img: IMG.solarArray, tag: 'Commercial Solar', title: 'Rooftop PV Array — Harare' },
  { img: IMG.transformerInstall, tag: 'Powerlines', title: 'Distribution Transformer Install' },
  { img: IMG.inverter, tag: 'Battery Storage', title: 'Hybrid Inverter & Storage' },
  { img: IMG.waterTanks, tag: 'Water Pumping', title: 'Triple-tank Borehole System' },
  { img: IMG.switchgear, tag: 'Electrical', title: 'Industrial Switchgear Panel' },
  { img: IMG.lpg, tag: 'LP Gas', title: 'Commercial LPG Reticulation' },
]

const testimonials = [
  { q: 'Leniah Energy transformed our facility with a flawless solar installation. The savings were immediate.', a: 'Operations Director', c: 'Manufacturing Client' },
  { q: 'Their team handled our substation upgrade with absolute professionalism and zero downtime.', a: 'Plant Manager', c: 'Industrial Client' },
  { q: 'From design to commissioning, every detail was meticulous. A genuine one-stop partner.', a: 'Estate Owner', c: 'Residential Client' },
]

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-charcoal text-white">
        <div className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(33,150,243,0.4), transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(76,175,80,0.3), transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(232,177,10,0.2), transparent 70%)' }} />
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.div key={i} className="absolute rounded-full bg-white/30"
            style={{ width: Math.random() * 4 + 1, height: Math.random() * 4 + 1, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 4 }} />
        ))}

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-32 pb-20 grid lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium tracking-wider uppercase mb-8">
              <span className="h-2 w-2 rounded-full bg-renewable-green animate-pulse" />
              Zimbabwe's Energy Innovators
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Powering Zimbabwe's<br />
              <span className="text-gradient-brand">Sustainable Future</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-8 text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed">
              Delivering innovative renewable energy and electrical engineering solutions that transform homes, businesses and communities.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4">
              <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-energy-yellow text-charcoal font-semibold hover:shadow-2xl hover:shadow-yellow-500/30 transition-all hover:-translate-y-0.5">
                Request Quote <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl glass text-white font-semibold hover:bg-white/10 transition-all">
                WhatsApp Us
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              className="mt-16 flex flex-wrap gap-x-10 gap-y-4 text-sm text-white/50">
              {['ZERA Compliant', 'ISO Standards', 'Certified Engineers', '24/7 Support'].map((t) => (
                <div key={t} className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-renewable-green" />{t}</div>
              ))}
            </motion.div>
          </div>
          <div className="lg:col-span-5">
            <EnergyOrb className="w-full max-w-[480px] mx-auto" />
          </div>
        </motion.div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest uppercase animate-bounce">Scroll</div>
      </section>

      {/* INTRO */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <Reveal className="lg:col-span-5">
              <div className="text-sm font-semibold tracking-widest uppercase text-renewable-green mb-4">About Leniah Energy</div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
                A wholly Zimbabwean company engineered for the energy transition.
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="lg:col-span-7 space-y-6 text-lg text-gray-500 leading-relaxed">
              <p>Leniah Energy Private Limited specializes in the design, installation and maintenance of electrical and renewable energy systems — and distributes the products that power them.</p>
              <p>From rooftop solar to high-voltage substations, LPG reticulation to solar-driven boreholes, we deliver a one-stop solution for energy needs across homes, commerce, industry and agriculture.</p>
              <div className="flex flex-wrap gap-3 pt-2">
                {['Solar PV', 'Substations', 'LPG', 'Water Pumping', 'Battery Storage'].map((t) => (
                  <span key={t} className="px-4 py-1.5 rounded-full bg-gray-100 text-sm font-medium">{t}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(232,177,10,0.3), transparent 60%)' }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-display text-5xl lg:text-7xl font-bold text-gradient-brand">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-3 text-sm uppercase tracking-wider text-white/60">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <div className="text-sm font-semibold tracking-widest uppercase text-renewable-green mb-4">What We Do</div>
              <h2 className="font-display text-4xl lg:text-6xl font-bold leading-tight">A complete energy ecosystem.</h2>
              <p className="mt-6 text-lg text-gray-500">Four integrated practices, one accountable partner.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <Link to="/services" className="group relative block overflow-hidden rounded-3xl border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    <img src={s.img} alt={s.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  </div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                    <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-4" style={{ background: s.color }}>
                      <s.icon className="h-6 w-6 text-charcoal" />
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold">{s.title}</h3>
                    <p className="mt-2 text-white/80 max-w-md">{s.desc}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-energy-yellow">
                      Explore <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-5">
              <div className="sticky top-28">
                <div className="text-sm font-semibold tracking-widest uppercase text-renewable-green mb-4">Why Leniah</div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">Engineered with precision. Delivered with care.</h2>
                <p className="mt-6 text-gray-500 text-lg">We combine deep technical expertise with an obsession for safety, quality and long-term partnership.</p>
              </div>
            </Reveal>
            <div className="lg:col-span-7 space-y-4">
              {whyUs.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.08}>
                  <div className="group flex gap-6 p-6 lg:p-8 rounded-2xl bg-white border border-gray-200 hover:border-energy-yellow/50 hover:shadow-lg transition-all">
                    <div className="shrink-0 h-14 w-14 rounded-xl bg-charcoal flex items-center justify-center group-hover:bg-energy-yellow group-hover:rotate-6 transition-all">
                      <f.icon className="h-6 w-6 text-energy-yellow group-hover:text-charcoal transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold">{f.title}</h3>
                      <p className="mt-2 text-gray-500">{f.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
              <div>
                <div className="text-sm font-semibold tracking-widest uppercase text-renewable-green mb-4">Featured Work</div>
                <h2 className="font-display text-4xl lg:text-6xl font-bold leading-tight">Projects powering Zimbabwe.</h2>
              </div>
              <Link to="/projects" className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all text-charcoal">
                View all projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <Reveal key={i} delay={(i % 3) * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl border border-gray-200">
                  <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                    <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-90" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <span className="text-xs uppercase tracking-widest text-energy-yellow font-semibold">{p.tag}</span>
                    <h3 className="font-display text-xl font-bold mt-2">{p.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY PARALLAX */}
      <section className="relative py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img src={IMG.solarInstall} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <Reveal>
            <div className="text-sm font-semibold tracking-widest uppercase text-energy-yellow mb-6">Sustainability</div>
            <h2 className="font-display text-4xl lg:text-6xl font-bold leading-tight">
              Every kilowatt we install is a step toward a cleaner Zimbabwe.
            </h2>
            <p className="mt-8 text-lg text-white/70 max-w-2xl mx-auto">
              We measure success not just in megawatts delivered, but in tonnes of carbon avoided, families empowered and communities transformed.
            </p>
            <Link to="/projects" className="mt-10 inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-energy-yellow text-charcoal font-semibold hover:shadow-2xl transition-all">
              See our impact <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <div className="text-sm font-semibold tracking-widest uppercase text-renewable-green mb-4">Testimonials</div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold">Trusted by leaders.</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="h-full p-8 rounded-3xl bg-gray-50 border border-gray-200 hover:shadow-xl transition-all">
                  <Quote className="h-8 w-8 text-energy-yellow mb-6" />
                  <p className="text-lg leading-relaxed">"{t.q}"</p>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="font-semibold">{t.a}</div>
                    <div className="text-sm text-gray-500">{t.c}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-charcoal text-white p-12 lg:p-20">
              <div className="absolute inset-0 opacity-50" style={{ background: 'radial-gradient(ellipse at top right, rgba(232,177,10,0.4), transparent 60%), radial-gradient(ellipse at bottom left, rgba(33,150,243,0.4), transparent 60%)' }} />
              <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-display text-4xl lg:text-6xl font-bold leading-tight">Ready to power what's next?</h2>
                  <p className="mt-6 text-lg text-white/70 max-w-lg">Tell us about your project. Our engineers will respond within 24 hours with a tailored proposal.</p>
                </div>
                <div className="flex flex-wrap gap-4 lg:justify-end">
                  <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-energy-yellow text-charcoal font-semibold hover:-translate-y-0.5 transition-all">
                    Request Quote <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl glass font-semibold hover:bg-white/10 transition-all">
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
