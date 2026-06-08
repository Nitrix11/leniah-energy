import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { COMPANY } from '@/lib/brand'

const services = ['Renewable Energy / Solar', 'Electrical Contracting', 'LP Gas Reticulation', 'Water Pumping Solutions', 'Maintenance', 'Other']

const faqs = [
  { q: 'Which areas of Zimbabwe do you serve?',       a: 'We deliver projects nationwide, with our base in Hatfield, Harare.' },
  { q: 'Do you handle both design and installation?', a: 'Yes. Leniah Energy is a one-stop partner — survey, design, supply, install, commission and maintain.' },
  { q: 'Are your installations ZERA-compliant?',      a: 'All our electrical work complies with ZERA regulations and Zimbabwean wiring standards.' },
  { q: 'How quickly can you respond to a quote request?', a: 'Most quotes are returned within 24–48 hours of a complete brief.' },
  { q: 'Do you offer maintenance contracts?',         a: 'Yes — for solar, electrical, LPG and water pumping systems we install or take over.' },
]

function Field({ label, value, onChange, type = 'text', required = false }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{label}{required && ' *'}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} required={required}
        className="mt-2 w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-energy-yellow text-sm transition-colors" />
    </div>
  )
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl bg-white border border-gray-200 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition">
        <span className="font-semibold">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 transition-transform text-gray-400 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="px-6 pb-6 text-gray-500 animate-fade-in">{a}</div>}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', service: services[0], message: '' })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Name: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\nMessage: ${form.message}`
    window.open(`https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-24 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(232,177,10,0.4), transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(33,150,243,0.4), transparent 60%)' }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-sm font-semibold tracking-widest uppercase text-energy-yellow mb-6">Contact</div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight max-w-4xl">
              Let's power <span className="text-gradient-brand">what's next together.</span>
            </h1>
            <p className="mt-8 text-xl text-white/70 max-w-2xl leading-relaxed">
              Share a few details and our team will respond within 24 hours with a tailored proposal.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-12">
          {/* INFO */}
          <Reveal className="lg:col-span-5 space-y-6">
            {[
              { icon: MapPin, label: 'Visit us',  value: COMPANY.address },
              { icon: Phone,  label: 'Call us',   value: COMPANY.phone,  href: `tel:${COMPANY.phoneRaw}` },
              { icon: Mail,   label: 'Email us',  value: COMPANY.email,  href: `mailto:${COMPANY.email}` },
              { icon: Clock,  label: 'Hours',     value: 'Mon–Fri 08:00–17:00 · Sat 09:00–13:00' },
            ].map((c) => (
              <div key={c.label} className="flex gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-energy-yellow transition-colors">
                <div className="h-12 w-12 rounded-xl bg-charcoal flex items-center justify-center shrink-0">
                  <c.icon className="h-5 w-5 text-energy-yellow" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-gray-400">{c.label}</div>
                  {c.href
                    ? <a href={c.href} className="text-lg font-semibold hover:text-energy-yellow transition-colors break-all">{c.value}</a>
                    : <div className="text-lg font-semibold">{c.value}</div>}
                </div>
              </div>
            ))}
          </Reveal>

          {/* FORM */}
          <Reveal className="lg:col-span-7" delay={0.1}>
            <form onSubmit={onSubmit} className="p-8 lg:p-10 rounded-3xl bg-gray-50 border border-gray-200 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name"    value={form.name}    onChange={(v) => setForm({ ...form, name: v })}    required />
                <Field label="Company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                <Field label="Phone"   value={form.phone}   onChange={(v) => setForm({ ...form, phone: v })}   required />
                <Field label="Email"   type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Service required</label>
                <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="mt-2 w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-energy-yellow text-sm cursor-pointer">
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Message</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={5}
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-energy-yellow text-sm resize-none"
                  placeholder="Tell us about your project..." />
              </div>
              <button type="submit"
                className="w-full px-7 py-4 rounded-xl bg-charcoal text-white font-semibold hover:bg-charcoal/90 transition-all hover:-translate-y-0.5 hover:shadow-xl">
                Send via WhatsApp
              </button>
              <p className="text-xs text-gray-400 text-center">Your message opens in WhatsApp and is sent directly to our team.</p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="rounded-3xl overflow-hidden border border-gray-200 h-[420px]">
              <iframe
                title="Leniah Energy location"
                width="100%" height="100%" style={{ border: 0 }}
                loading="lazy" allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=76+St+Andrews+Road+Hatfield+Harare+Zimbabwe&output=embed"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-sm font-semibold tracking-widest uppercase text-renewable-green mb-4">FAQ</div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold">Questions, answered.</h2>
            </div>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-charcoal text-white p-12 lg:p-16 text-center">
              <div className="absolute inset-0 opacity-50" style={{ background: 'radial-gradient(ellipse at center, rgba(232,177,10,0.3), transparent 70%)' }} />
              <div className="relative">
                <h2 className="font-display text-3xl lg:text-5xl font-bold">Prefer to talk now?</h2>
                <p className="mt-4 text-white/70">Message us directly on WhatsApp — we usually reply within minutes.</p>
                <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-energy-yellow text-charcoal font-semibold hover:-translate-y-0.5 transition-all">
                  Open WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
