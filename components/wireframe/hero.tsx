interface Props { mobile?: boolean }

export default function WireframeHero({ mobile }: Props) {
  return (
    <section className={`border-b-2 border-black py-12 ${mobile ? "py-8" : ""}`}>
      <div className={`grid gap-8 ${mobile ? "grid-cols-1" : "grid-cols-[2fr_1fr] items-end"}`}>

        {/* Left: Main text block */}
        <div className="flex flex-col gap-5">
          {/* Role tag */}
          <div className="border border-black w-fit px-3 py-1 text-xs tracking-widest uppercase">
            Frontend-Focused Software Engineering Student
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
              "I design systems before interfaces — building efficient, structured solutions
              through requirements analysis, architecture planning, and intentional code."
            </p>
          </div>

          {/* CTA */}
          <div className="flex gap-4 flex-wrap">
            <div className="border-2 border-black px-6 py-2 text-xs font-bold tracking-widest uppercase bg-black text-white w-fit">
              [ VIEW PROJECTS ]
            </div>
            <div className="border-2 border-black px-6 py-2 text-xs font-bold tracking-widest uppercase w-fit">
              [ DOWNLOAD CV ]
            </div>
          </div>
        </div>

        {/* Right: Status block (desktop only) */}
        {!mobile && (
          <div className="flex flex-col gap-3 self-start">
            <div className="border-2 border-dashed border-gray-400 p-4">
              <p className="text-xs font-bold tracking-widest mb-2 uppercase">Status</p>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex justify-between border-b border-gray-300 pb-1">
                  <span>Availability</span><span className="font-bold text-black">Open to Work</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 pb-1">
                  <span>Focus</span><span className="font-bold text-black">Frontend Dev</span>
                </div>
                <div className="flex justify-between">
                  <span>Location</span><span className="font-bold text-black">Ecuador</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
