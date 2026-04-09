interface Props {
  mobile?: boolean
  lang: 'es' | 'en'
}

export default function ContactSection({ mobile, lang }: Props) {
  const copy =
    lang === 'en'
      ? {
          section: '06 - Contact',
          info: 'Contact Information',
          location: 'Location',
          country: 'Colombia',
          cv: 'Samuel Esteban Mena Pupiales - Resume',
          download: '[ DOWNLOAD PDF ]',
          sendTitle: 'Send a Message',
          name: 'Name',
          email: 'Email',
          message: 'Message',
          send: '[ SEND MESSAGE ]',
          footer: 'Samuel Esteban Mena Pupiales - Portfolio',
        }
      : {
          section: '06 - Contacto',
          info: 'Información de Contacto',
          location: 'Ubicación',
          country: 'Colombia',
          cv: 'Samuel Esteban Mena Pupiales - CV',
          download: '[ DESCARGAR PDF ]',
          sendTitle: 'Enviar un Mensaje',
          name: 'Nombre',
          email: 'Email',
          message: 'Mensaje',
          send: '[ ENVIAR MENSAJE ]',
          footer: 'Samuel Esteban Mena Pupiales - Portafolio',
        }

  return (
    <section id="contact" className={`py-12 scroll-mt-20 ${mobile ? "py-8" : ""}`}>
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs tracking-widest uppercase font-bold">{copy.section}</span>
        <div className="flex-1 border-t border-black" />
      </div>

      <div className={`grid gap-8 ${mobile ? "grid-cols-1" : "grid-cols-[1fr_1fr]"}`}>

        {/* Left: Contact info */}
        <div className="flex flex-col gap-4">
          <div className="border-2 border-black p-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-4 border-b border-black pb-2">{copy.info}</p>
            <div className="flex flex-col gap-3 text-sm">
              <div className="border border-gray-300 px-3 py-2 flex justify-between items-center">
                <span className="text-xs text-gray-500 uppercase tracking-widest">Email</span>
                <span className="font-bold text-xs">samuel.mena@example.com</span>
              </div>
              <div className="border border-gray-300 px-3 py-2 flex justify-between items-center">
                <span className="text-xs text-gray-500 uppercase tracking-widest">GitHub</span>
                <span className="font-bold text-xs">github.com/SamuelMenan</span>
              </div>
              <div className="border border-gray-300 px-3 py-2 flex justify-between items-center">
                <span className="text-xs text-gray-500 uppercase tracking-widest">LinkedIn</span>
                <span className="font-bold text-xs">linkedin.com/in/SamuelMena</span>
              </div>
              <div className="border border-gray-300 px-3 py-2 flex justify-between items-center">
                <span className="text-xs text-gray-500 uppercase tracking-widest">{copy.location}</span>
                <span className="font-bold text-xs">{copy.country}</span>
              </div>
            </div>
          </div>
          {/* Download CTA */}
          <div className="border-2 border-dashed border-gray-400 px-4 py-3 flex items-center justify-between">
            <span className="text-xs text-gray-600">{copy.cv}</span>
            <div className="border-2 border-black px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
              {copy.download}
            </div>
          </div>
        </div>

        {/* Right: Simple form */}
        <div className="border-2 border-black p-4">
          <p className="text-xs font-bold uppercase tracking-widest mb-4 border-b border-black pb-2">{copy.sendTitle}</p>
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-xs text-gray-500 mb-1 uppercase tracking-widest">{copy.name}</p>
              <div className="border border-black h-8 bg-gray-50" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1 uppercase tracking-widest">{copy.email}</p>
              <div className="border border-black h-8 bg-gray-50" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1 uppercase tracking-widest">{copy.message}</p>
              <div className="border border-black h-20 bg-gray-50" />
            </div>
            <div className="border-2 border-black bg-black text-white text-center py-2 text-xs font-bold tracking-widest uppercase">
              {copy.send}
            </div>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="mt-12 border-t-2 border-black pt-4 flex items-center justify-between text-xs text-gray-500">
        <span>{copy.footer}</span>
        <span>© 2026</span>
      </div>
    </section>
  )
}
