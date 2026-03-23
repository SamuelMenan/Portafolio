import WireframeNav from "@/components/wireframe/nav"
import WireframeHero from "@/components/wireframe/hero"
import WireframeAbout from "@/components/wireframe/about"
import WireframeProjects from "@/components/wireframe/projects"
import WireframeSkills from "@/components/wireframe/skills"
import WireframeProcess from "@/components/wireframe/process"
import WireframeContact from "@/components/wireframe/contact"
import WireframeAnnotation from "@/components/wireframe/annotation"

export default function Page() {
  return (
    <div className="min-h-screen bg-white font-mono text-black">
      {/* Wireframe Label */}
      <div className="border-b-2 border-black bg-gray-100 px-6 py-2 flex items-center justify-between">
        <span className="text-xs font-bold tracking-widest uppercase">Lo-Fi Wireframe — Portfolio: Samuel Esteban Mena Pupiales</span>
        <div className="flex gap-4 text-xs text-gray-500">
          <span className="border border-gray-400 px-2 py-0.5">Desktop + Mobile</span>
          <span className="border border-gray-400 px-2 py-0.5">Grayscale Only</span>
        </div>
      </div>

      {/* Desktop + Mobile side-by-side annotation */}
      <WireframeAnnotation />

      {/* ── DESKTOP VIEW ── */}
      <section className="border-b-4 border-black">
        <div className="bg-gray-200 border-b-2 border-black px-6 py-1">
          <span className="text-xs tracking-widest uppercase font-bold">[ Desktop — ≥ 1024px ]</span>
        </div>
        <div className="max-w-[1100px] mx-auto px-8 pb-16">
          <WireframeNav />
          <WireframeHero />
          <WireframeAbout />
          <WireframeProjects />
          <WireframeSkills />
          <WireframeProcess />
          <WireframeContact />
        </div>
      </section>

      {/* ── MOBILE VIEW ── */}
      <section>
        <div className="bg-gray-200 border-b-2 border-black px-6 py-1">
          <span className="text-xs tracking-widest uppercase font-bold">[ Mobile — ≤ 390px ]</span>
        </div>
        <div className="max-w-[390px] mx-auto px-4 pb-16 border-x-2 border-dashed border-gray-400">
          <WireframeNav mobile />
          <WireframeHero mobile />
          <WireframeAbout mobile />
          <WireframeProjects mobile />
          <WireframeSkills mobile />
          <WireframeProcess mobile />
          <WireframeContact mobile />
        </div>
      </section>
    </div>
  )
}
