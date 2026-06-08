import { COMPANY } from '@/lib/brand'

export default function WhatsAppFloat() {
  return (
    <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-40 group">
      <span className="absolute inset-0 rounded-full bg-renewable-green animate-pulse-ring" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
        <svg viewBox="0 0 32 32" className="h-7 w-7 text-white" fill="currentColor">
          <path d="M16.003 3C9.374 3 4 8.374 4 15.003a11.93 11.93 0 0 0 1.69 6.137L4 28l7.077-1.853a12.02 12.02 0 0 0 4.926 1.06h.005c6.628 0 12.003-5.375 12.003-12.003C28.011 8.374 22.637 3 16.003 3zm0 21.806h-.004a9.85 9.85 0 0 1-5.022-1.376l-.36-.214-4.2 1.1 1.122-4.094-.235-.42a9.83 9.83 0 0 1-1.5-5.247c0-5.426 4.42-9.846 9.852-9.846a9.78 9.78 0 0 1 6.968 2.886 9.78 9.78 0 0 1 2.884 6.97c-.002 5.43-4.422 9.85-9.852 9.85zM21.43 17.62c-.296-.148-1.755-.866-2.027-.965-.272-.099-.47-.148-.668.148-.197.296-.766.965-.94 1.163-.173.198-.346.222-.643.074-.296-.148-1.252-.461-2.385-1.471-.881-.786-1.476-1.756-1.65-2.052-.173-.297-.018-.457.13-.605.133-.133.297-.346.445-.52.149-.173.198-.296.297-.494.099-.198.05-.371-.025-.52-.074-.148-.668-1.61-.915-2.205-.241-.579-.486-.5-.668-.51l-.57-.01a1.09 1.09 0 0 0-.792.371c-.272.297-1.04 1.016-1.04 2.477 0 1.461 1.065 2.872 1.213 3.07.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.086 1.755-.717 2.003-1.41.247-.693.247-1.288.173-1.41-.074-.124-.272-.198-.569-.347z"/>
        </svg>
      </span>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-charcoal text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us
      </span>
    </a>
  )
}
