interface Props {
  mobile?: boolean
  lang: 'es' | 'en'
}

export default function AboutSection({ mobile, lang }: Props) {
  const copy =
    lang === 'en'
      ? {
          section: '02 - About Me',
          placeholder: '[ PHOTO / DIAGRAM ]',
          career: 'Career',
          careerValue: 'Software Eng.',
          focus: 'Focus',
          focusValue: 'Planning First',
          mindset: 'Mindset',
          mindsetValue: 'System Thinking',
          block1Title: 'Structured Thinking',
          block1Body:
            'I approach software development as a systems architect first. Before writing a single line of code, I define requirements, map dependencies, and establish clear boundaries across components.',
          block2Title: 'Plan Before Coding',
          block2Body:
            'Every project starts with diagrams: C4 models, entity-relationship diagrams, and flow diagrams. This pre-coding phase removes ambiguity and reduces rework during implementation.',
          block3Title: 'Driven by Efficiency',
          block3Body:
            'I value clean and maintainable code over clever shortcuts. Organized folder structures, consistent naming conventions, and documented decisions are non-negotiable for me.',
        }
      : {
          section: '02 - Sobre Mí',
          placeholder: '[ FOTO / DIAGRAMA ]',
          career: 'Carrera',
          careerValue: 'Ing. Software',
          focus: 'Enfoque',
          focusValue: 'Planificación Primero',
          mindset: 'Mentalidad',
          mindsetValue: 'Pensamiento Sistémico',
          block1Title: 'Pensamiento Estructurado',
          block1Body:
            'Abordo el desarrollo de software como un arquitecto de sistemas primero. Antes de escribir una sola línea de código, defino requisitos, mapeo dependencias y establezco límites claros entre componentes.',
          block2Title: 'Planificación Antes de Codificar',
          block2Body:
            'Cada proyecto comienza con diagramas: modelos C4, diagramas de relaciones de entidades y diagramas de flujo. Esta fase previa a la codificación elimina ambigüedades y reduce el retrabajo durante la implementación.',
          block3Title: 'Impulsado por Eficiencia',
          block3Body:
            'Valoro el código limpio y mantenible sobre atajos ingeniosos. Estructuras de carpetas organizadas, convenciones de nomenclatura consistentes y decisiones bien documentadas son innegociables para mí.',
        }

  return (
    <section id="about" className={`border-b-2 border-black py-12 scroll-mt-20 ${mobile ? "py-8" : ""}`}>
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs tracking-widest uppercase font-bold">{copy.section}</span>
        <div className="flex-1 border-t border-black" />
      </div>

      <div className={`grid gap-8 ${mobile ? "grid-cols-1" : "grid-cols-[1fr_2fr]"}`}>

        {/* Left: Placeholder block (profile/diagram) */}
        <div className="flex flex-col gap-3">
          <div className={`border-2 border-dashed border-gray-400 flex items-center justify-center ${mobile ? "h-28" : "h-48"}`}>
            <span className="text-xs text-gray-400 tracking-widest">{copy.placeholder}</span>
          </div>
          {/* Quick stats */}
          <div className="border border-black p-3 text-xs">
            <div className="border-b border-gray-300 pb-1 mb-1 flex justify-between"><span>{copy.career}</span><span className="font-bold">{copy.careerValue}</span></div>
            <div className="border-b border-gray-300 pb-1 mb-1 flex justify-between"><span>{copy.focus}</span><span className="font-bold">{copy.focusValue}</span></div>
            <div className="flex justify-between"><span>{copy.mindset}</span><span className="font-bold">{copy.mindsetValue}</span></div>
          </div>
        </div>

        {/* Right: Text content */}
        <div className="flex flex-col gap-4">
          <div className="border border-black p-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 border-b border-black pb-1">{copy.block1Title}</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {copy.block1Body}
            </p>
          </div>
          <div className="border border-black p-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 border-b border-black pb-1">{copy.block2Title}</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {copy.block2Body}
            </p>
          </div>
          <div className="border border-black p-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 border-b border-black pb-1">{copy.block3Title}</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {copy.block3Body}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
