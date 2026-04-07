interface Props { mobile?: boolean }

export default function WireframeAbout({ mobile }: Props) {
  return (
    <section className={`border-b-2 border-black py-12 ${mobile ? "py-8" : ""}`}>
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs tracking-widest uppercase font-bold">02 — Sobre Mí</span>
        <div className="flex-1 border-t border-black" />
      </div>

      <div className={`grid gap-8 ${mobile ? "grid-cols-1" : "grid-cols-[1fr_2fr]"}`}>

        {/* Left: Placeholder block (profile/diagram) */}
        <div className="flex flex-col gap-3">
          <div className={`border-2 border-dashed border-gray-400 flex items-center justify-center ${mobile ? "h-28" : "h-48"}`}>
            <span className="text-xs text-gray-400 tracking-widest">[ FOTO / DIAGRAMA ]</span>
          </div>
          {/* Quick stats */}
          <div className="border border-black p-3 text-xs">
            <div className="border-b border-gray-300 pb-1 mb-1 flex justify-between"><span>Carrera</span><span className="font-bold">Ing. Software</span></div>
            <div className="border-b border-gray-300 pb-1 mb-1 flex justify-between"><span>Enfoque</span><span className="font-bold">Planificación Primero</span></div>
            <div className="flex justify-between"><span>Mentalidad</span><span className="font-bold">Pensamiento Sistémico</span></div>
          </div>
        </div>

        {/* Right: Text content */}
        <div className="flex flex-col gap-4">
          <div className="border border-black p-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 border-b border-black pb-1">Pensamiento Estructurado</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Abordo el desarrollo de software como un arquitecto de sistemas primero. Antes de escribir una sola línea de código,
              defino requisitos, mapeo dependencias y establezco límites claros entre componentes.
            </p>
          </div>
          <div className="border border-black p-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 border-b border-black pb-1">Planificación Antes de Codificar</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Cada proyecto comienza con diagramas: modelos C4, diagramas de relaciones de entidades y diagramas de flujo.
              Esta fase previa a la codificación elimina ambigüedades y reduce el retrabajo durante la implementación.
            </p>
          </div>
          <div className="border border-black p-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 border-b border-black pb-1">Impulsado por Eficiencia</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Valoro el código limpio y mantenible sobre atajos ingeniosos. Estructuras de carpetas organizadas,
              convenciones de nomenclatura consistentes y decisiones bien documentadas son innegociables para mí.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
