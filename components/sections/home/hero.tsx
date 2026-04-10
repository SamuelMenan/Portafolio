"use client"

interface Props {
  mobile?: boolean
  lang: 'es' | 'en'
}

export default function HeroSection({ mobile, lang }: Props) {
  const copy =
    lang === 'en'
      ? {
          role: 'Software Engineering Student focused on Frontend',
          statement:
            '"I design systems before interfaces - building efficient and structured solutions through requirements analysis, architecture planning, and intentional code."',
          viewProjects: '[ VIEW PROJECTS ]',
          downloadCV: '[ DOWNLOAD CV ]',
          status: 'Status',
          availability: 'Availability',
          available: 'Open to Work',
          focus: 'Focus',
          frontend: 'Frontend Development',
          location: 'Location',
          country: 'Colombia',
        }
      : {
          role: 'Estudiante de Ingeniería de Software enfocado en Frontend',
          statement:
            '"Diseño sistemas antes que interfaces - construyendo soluciones eficientes y estructuradas a través del análisis de requisitos, planificación de arquitectura y código intencional."',
          viewProjects: '[ VER PROYECTOS ]',
          downloadCV: '[ DESCARGAR CV ]',
          status: 'Estado',
          availability: 'Disponibilidad',
          available: 'Abierto a Trabajar',
          focus: 'Enfoque',
          frontend: 'Desarrollo Frontend',
          location: 'Ubicación',
          country: 'Colombia',
        }

  function goToProjects() {
    const candidates = Array.from(document.querySelectorAll<HTMLElement>('section#projects'))
    const visibleSection =
      candidates.find((section) => {
        const rect = section.getBoundingClientRect()
        return rect.width > 0 && rect.height > 0 && window.getComputedStyle(section).display !== 'none'
      }) ?? null

    if (!visibleSection) return
    visibleSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className={`border-b-2 border-black py-12 ${mobile ? "py-8" : ""}`}>
      <div className={`grid gap-8 ${mobile ? "grid-cols-1" : "grid-cols-[2fr_1fr] items-end"}`}>

        {/* Left: Main text block */}
        <div className="flex flex-col gap-5">
          {/* Role tag */}
          <div className="border border-black w-fit px-3 py-1 text-xs tracking-widest uppercase">
            {copy.role}
          </div>

          {/* Name */}
          <div className={`border-2 border-black px-4 py-4 bg-gray-100 ${mobile ? "" : ""}`}>
            <p className={`font-bold tracking-tight leading-none ${mobile ? "text-2xl" : "text-5xl"}`}>
              Samuel Esteban<br />Mena Pupiales
            </p>
          </div>

          {/* Statement */}
          <div className="border border-dashed border-gray-500 px-4 py-3">
            <p className="text-sm text-gray-700 leading-relaxed">
              {copy.statement}
            </p>
          </div>

          {/* CTA */}
          <div className="flex gap-4 flex-wrap">
            <button
              type="button"
              onClick={goToProjects}
              className="border-2 border-black px-6 py-2 text-xs font-bold tracking-widest uppercase bg-black text-white w-fit cursor-pointer"
            >
              {copy.viewProjects}
            </button>
            <div className="border-2 border-black px-6 py-2 text-xs font-bold tracking-widest uppercase w-fit">
              {copy.downloadCV}
            </div>
          </div>
        </div>

        {/* Right: Status block (desktop only) */}
        {!mobile && (
          <div className="flex flex-col gap-3 self-start">
            <div className="border-2 border-dashed border-gray-400 p-4">
              <p className="text-xs font-bold tracking-widest mb-2 uppercase">{copy.status}</p>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex justify-between border-b border-gray-300 pb-1">
                  <span>{copy.availability}</span><span className="font-bold text-black">{copy.available}</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 pb-1">
                  <span>{copy.focus}</span><span className="font-bold text-black">{copy.frontend}</span>
                </div>
                <div className="flex justify-between">
                  <span>{copy.location}</span><span className="font-bold text-black">{copy.country}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
