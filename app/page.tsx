import WireframeNav from "@/components/wireframe/nav"
import WireframeHero from "@/components/wireframe/hero"
import WireframeAbout from "@/components/wireframe/about"
import WireframeProjects from "@/components/wireframe/projects"
import WireframeSkills from "@/components/wireframe/skills"
import WireframeProcess from "@/components/wireframe/process"
import WireframeContact from "@/components/wireframe/contact"

export default function Page() {
  return (
    <div className="min-h-screen bg-white font-mono text-black">
      {/* DESKTOP VIEW */}
      <section className="border-b-4 border-black">
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

      {/* MOBILE VIEW */}
      <section>
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
