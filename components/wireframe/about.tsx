interface Props { mobile?: boolean }

export default function WireframeAbout({ mobile }: Props) {
  return (
    <section className={`border-b-2 border-black py-12 ${mobile ? "py-8" : ""}`}>
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs tracking-widest uppercase font-bold">02 — About</span>
        <div className="flex-1 border-t border-black" />
      </div>

      <div className={`grid gap-8 ${mobile ? "grid-cols-1" : "grid-cols-[1fr_2fr]"}`}>

        {/* Left: Placeholder block (profile/diagram) */}
        <div className="flex flex-col gap-3">
          <div className={`border-2 border-dashed border-gray-400 flex items-center justify-center ${mobile ? "h-28" : "h-48"}`}>
            <span className="text-xs text-gray-400 tracking-widest">[ PHOTO / DIAGRAM ]</span>
          </div>
          {/* Quick stats */}
          <div className="border border-black p-3 text-xs">
            <div className="border-b border-gray-300 pb-1 mb-1 flex justify-between"><span>Degree</span><span className="font-bold">Ing. Software</span></div>
            <div className="border-b border-gray-300 pb-1 mb-1 flex justify-between"><span>Approach</span><span className="font-bold">Plan-First</span></div>
            <div className="flex justify-between"><span>Mindset</span><span className="font-bold">Systems Thinking</span></div>
          </div>
        </div>

        {/* Right: Text content */}
        <div className="flex flex-col gap-4">
          <div className="border border-black p-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 border-b border-black pb-1">Structured Thinking</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              I approach software development as a system architect first. Before writing a single line of code,
              I define requirements, map dependencies, and establish clear boundaries between components.
            </p>
          </div>
          <div className="border border-black p-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 border-b border-black pb-1">Planning Before Coding</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Every project begins with diagrams: C4 models, entity-relationship diagrams, and flow charts.
              This pre-coding phase eliminates ambiguity and reduces rework during implementation.
            </p>
          </div>
          <div className="border border-black p-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 border-b border-black pb-1">Efficiency-Driven</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              I value clean, maintainable code over clever shortcuts. Organized folder structures,
              consistent naming conventions, and well-documented decisions are non-negotiable to me.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
