interface Props {
  mobile?: boolean
  embedded?: boolean
}

const steps = [
  {
    step: "01",
    label: "Recopilación de Requisitos",
    detail: "Requisitos funcionales y no funcionales. Entrevistas con partes interesadas. Historias de usuario.",
    artifact: "[ Documento de Requisitos ]",
  },
  {
    step: "02",
    label: "Diseño del Sistema",
    detail: "Diagramas C4 Contexto + Contenedor. Diagramas ER. Definición de contratos de API.",
    artifact: "[ Diagrama C4 ]",
  },
  {
    step: "03",
    label: "Decisión de Arquitectura",
    detail: "Selección de stack tecnológico. Estructura en capas o modular. Mapeo de dependencias.",
    artifact: "[ ADR / Bosquejo Arquitectura ]",
  },
  {
    step: "04",
    label: "Implementación",
    detail: "Desarrollo iterativo. Componentes primero en frontend. Servicios primero en backend.",
    artifact: "[ Diagrama Estructura Código ]",
  },
  {
    step: "05",
    label: "Revisión y Refactorización",
    detail: "Revisión de código contra diseño inicial. Verificación de consistencia. Documentación.",
    artifact: "[ Lista de Verificación ]",
  },
]

export default function WireframeProcess({ mobile, embedded }: Props) {
  return (
    <section className={embedded ? `${mobile ? "pt-6" : "pt-8"}` : `border-b-2 border-black py-12 ${mobile ? "py-8" : ""}`}>
      {/* Section header */}
      {embedded ? (
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs tracking-widest uppercase font-bold">Proceso aplicado a los proyectos</span>
          <div className="flex-1 border-t border-black" />
        </div>
      ) : (
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs tracking-widest uppercase font-bold">05 — Arquitectura / Proceso</span>
          <div className="flex-1 border-t border-black" />
        </div>
      )}

      <div className={`grid gap-8 ${mobile ? "grid-cols-1" : "grid-cols-[1fr_2fr]"}`}>

        {/* Left: Philosophy block */}
        <div className="flex flex-col gap-4">
          <div className="border-2 border-black p-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 border-b border-black pb-1">Filosofía de Diseño</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Los sistemas se diseñan antes de que se construyan. Cada decisión arquitectónica es deliberada,
              documentada y trazable hacia un requisito.
            </p>
          </div>
          <div className="border-2 border-dashed border-gray-400 p-4 flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Artefactos de Diagramas Usados</p>
            {["Modelo C4 (Contexto, Contenedor)", "Diagramas ER / Base de Datos", "Diagramas de Secuencia UML", "Diagramas de Flujo de Componentes"].map((d) => (
              <div key={d} className="border border-gray-300 px-3 py-1.5 text-xs flex items-center gap-2">
                <div className="w-2 h-2 border border-gray-400 bg-gray-200 shrink-0" />
                {d}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Process steps */}
        <div className="flex flex-col gap-0">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`border-l-4 border-l-black border-t border-t-gray-300 ${mobile ? "pl-4 py-3" : "pl-6 py-4"} ${i === 0 ? "border-t-0" : ""}`}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-gray-200 leading-none select-none">{s.step}</span>
                <div className="flex-1">
                  <p className="text-sm font-bold tracking-wide mb-1">{s.label}</p>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">{s.detail}</p>
                  <div className="border border-dashed border-gray-400 text-xs text-gray-400 px-3 py-1.5 inline-block">
                    {s.artifact}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
