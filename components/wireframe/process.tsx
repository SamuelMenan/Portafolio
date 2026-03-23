interface Props { mobile?: boolean }

const steps = [
  {
    step: "01",
    label: "Requirements Gathering",
    detail: "Functional & non-functional requirements. Stakeholder interviews. User stories.",
    artifact: "[ Requirements Doc Placeholder ]",
  },
  {
    step: "02",
    label: "System Design",
    detail: "C4 Context + Container diagrams. ER diagrams. API contract definition.",
    artifact: "[ C4 Diagram Placeholder ]",
  },
  {
    step: "03",
    label: "Architecture Decision",
    detail: "Tech stack selection. Layered or modular structure. Dependency mapping.",
    artifact: "[ ADR / Architecture Sketch ]",
  },
  {
    step: "04",
    label: "Implementation",
    detail: "Iterative development. Component-first in frontend. Service-first in backend.",
    artifact: "[ Code Structure Diagram ]",
  },
  {
    step: "05",
    label: "Review & Refactor",
    detail: "Code review against initial design. Consistency check. Documentation.",
    artifact: "[ Review Checklist ]",
  },
]

export default function WireframeProcess({ mobile }: Props) {
  return (
    <section className={`border-b-2 border-black py-12 ${mobile ? "py-8" : ""}`}>
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs tracking-widest uppercase font-bold">05 — Architecture / Process</span>
        <div className="flex-1 border-t border-black" />
      </div>

      <div className={`grid gap-8 ${mobile ? "grid-cols-1" : "grid-cols-[1fr_2fr]"}`}>

        {/* Left: Philosophy block */}
        <div className="flex flex-col gap-4">
          <div className="border-2 border-black p-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 border-b border-black pb-1">Design Philosophy</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Systems are designed before they are built. Every architectural decision is deliberate,
              documented, and traceable back to a requirement.
            </p>
          </div>
          <div className="border-2 border-dashed border-gray-400 p-4 flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Diagram Artifacts Used</p>
            {["C4 Model (Context, Container)", "ER / Database Diagrams", "UML Sequence Diagrams", "Component Flow Charts"].map((d) => (
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
              className={`border-l-4 border-black border-t border-gray-300 ${mobile ? "pl-4 py-3" : "pl-6 py-4"} ${i === 0 ? "border-t-0" : ""}`}
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
