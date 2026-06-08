import { Link } from 'react-router-dom'
import { Target, Eye, ShieldCheck, Heart, Leaf, Award, Sparkles, Users, Zap, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { COMPANY, IMG } from '@/lib/brand'

const values = [
  { icon: Heart,       title: 'Customer First',            body: "Every decision starts with the client's outcome." },
  { icon: Award,       title: 'Excellence',                body: 'Engineered standards, never just adequate.' },
  { icon: Sparkles,    title: 'Innovation',                body: "Bringing tomorrow's energy thinking to today's projects." },
  { icon: ShieldCheck, title: 'Integrity',                 body: 'Transparent pricing, honest engineering, kept promises.' },
  { icon: Leaf,        title: 'Environmental Stewardship', body: 'Designed to reduce footprint, not just bills.' },
  { icon: Users,       title: 'Professionalism',           body: 'Calm, prepared, accountable teams on every site.' },
  { icon: ShieldCheck, title: 'Safety',                    body: 'Zero-harm culture — non-negotiable.' },
  { icon: Zap,         title: 'Reliability',               body: 'Systems and people you can count on.' },
]

const timeline = [
  { year: '2018', title: 'Founded',              body: 'Leniah Energy launches in Harare with a focus on solar PV.' },
  { year: '2020', title: 'Electrical Contracting', body: 'Expanded into substations, powerlines and industrial installs.' },
  { year: '2022', title: 'Multi-discipline',     body: 'Added LPG reticulation and water-pumping divisions.' },
  { year: '2024', title: 'National scale',       body: 'Delivering complex projects across Zimbabwe.' },
  { year: '2026', title: 'The next chapter',     body: "Building Zimbabwe's most trusted energy partner." },
]

export default function About() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(76,175,80,0.5), transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(33,150,243,0.4), transparent 60%)' }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-sm font-semibold tracking-widest uppercase text-energy-yellow mb-6">About Us</div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight max-w-4xl">
              Built on Zimbabwean soil. <span className="text-gradient-brand">Engineered for the world.</span>
            </h1>
            <p className="mt-8 text-xl text-white/70 max-w-2xl leading-relaxed">
              Leniah Energy is a wholly-owned Zimbabwean company specializing in the design, installation and maintenance of electrical and renewable energy systems.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-5">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 sticky top-28">
              <img src={IMG.solarArray} alt="Leniah Energy team" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7 space-y-6 text-lg text-gray-500 leading-relaxed" delay={0.1}>
            <div className="text-sm font-semibold tracking-widest uppercase text-renewable-green">Our Story</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-charcoal leading-tight">Why we exist.</h2>
            <p>Zimbabwe deserves world-class energy infrastructure — designed, built and maintained by Zimbabweans who care about doing it right.</p>
            <p>We started Leniah Energy to close that gap. To bring tier-one engineering, premium components and rigorous safety culture to every rooftop, substation, borehole and gas system we touch.</p>
            <p>Today, we are a one-stop partner for renewable energy, electrical contracting, LPG reticulation and water pumping solutions — serving homes, businesses, industry and agriculture across the country.</p>
            <div className="pt-6">
              <div className="font-display text-2xl font-bold text-charcoal">{COMPANY.md}</div>
              <div className="text-sm">Managing Director</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-6">
          {[
            { icon: Eye,    label: 'Our Vision', title: 'To be the leading organisation in the energy industry.', body: 'Through sustainable growth, innovation and strong customer relationships — providing a one-stop solution for energy needs.' },
            { icon: Target, label: 'Our Mission', title: 'Safe, effective and reliable energy.', body: 'Delivered through passion, expertise, teamwork and an unwavering commitment to customer satisfaction.' },
          ].map((v, i) => (
            <Reveal key={v.label} delay={i * 0.1}>
              <div className="h-full p-10 lg:p-14 rounded-3xl bg-white border border-gray-200 relative overflow-hidden group hover:shadow-2xl transition-all">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 group-hover:opacity-30 transition-opacity"
                  style={{ background: i === 0 ? '#4CAF50' : '#E8B10A' }} />
                <v.icon className="h-12 w-12 text-energy-yellow mb-6" />
                <div className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-3">{v.label}</div>
                <h3 className="font-display text-3xl font-bold leading-tight">{v.title}</h3>
                <p className="mt-6 text-gray-500 leading-relaxed">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <div className="text-sm font-semibold tracking-widest uppercase text-renewable-green mb-4">Core Values</div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold">Eight principles. One standard.</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 0.08}>
                <div className="group h-full p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-energy-yellow hover:-translate-y-1 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-charcoal flex items-center justify-center mb-5 group-hover:bg-energy-yellow transition-colors">
                    <v.icon className="h-5 w-5 text-energy-yellow group-hover:text-charcoal" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(232,177,10,0.3), transparent 60%)' }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <div className="aspect-square max-w-md rounded-3xl p-1" style={{ background: 'linear-gradient(135deg, #E8B10A, #E53935, #2196F3)' }}>
              <div className="h-full w-full rounded-3xl bg-charcoal flex items-center justify-center text-9xl font-display font-bold text-white/10">
                LS
              </div>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.15}>
            <div className="text-sm font-semibold tracking-widest uppercase text-energy-yellow mb-4">Leadership</div>
            <h2 className="font-display text-5xl lg:text-6xl font-bold leading-tight">{COMPANY.md}</h2>
            <div className="mt-2 text-lg text-white/60">Managing Director</div>
            <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-2xl">
              Leroy leads Leniah Energy with a vision rooted in engineering excellence and Zimbabwean enterprise. Under his direction, the company has grown from a focused solar installer into a multi-discipline energy partner trusted by homes, industry and government clients alike.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <div className="text-sm font-semibold tracking-widest uppercase text-renewable-green mb-4">Our Journey</div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold">From spark to ecosystem.</h2>
            </div>
          </Reveal>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-1/2" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.1}>
                  <div className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={i % 2 ? 'md:order-2' : ''}>
                      <div className="font-display text-4xl font-bold text-gradient-brand">{t.year}</div>
                      <h3 className="mt-2 font-display text-2xl font-bold">{t.title}</h3>
                      <p className="mt-2 text-gray-500">{t.body}</p>
                    </div>
                    <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-energy-yellow ring-4 ring-white" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200">
              <img src={IMG.solarInstall} alt="Safety on site" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="text-sm font-semibold tracking-widest uppercase text-renewable-green mb-4">Safety & Compliance</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">Zero-harm is a culture, not a checkbox.</h2>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              Every Leniah Energy crew is trained, certified and equipped to industry-leading standards. We comply with ZERA regulations, ISO best practice and follow rigorous internal safety protocols on every site — from rooftop solar to live HV switching.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-charcoal text-white font-semibold hover:bg-charcoal/90 transition-all">
              Talk to us <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
