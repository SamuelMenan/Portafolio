import WireframeNav from "@/components/wireframe/nav"
import WireframeHero from "@/components/wireframe/hero"
import WireframeAbout from "@/components/wireframe/about"
import WireframeProjects from "@/components/wireframe/projects"
import WireframeSkills from "@/components/wireframe/skills"
import WireframeTestimonios from "@/components/wireframe/testimonios"
import WireframeContact from "@/components/wireframe/contact"

export default function Page() {
  return (
    <div className="portfolio-theme min-h-screen">
      {/* DESKTOP VIEW */}
      <section className="hidden lg:block">
        <div className="portfolio-shell max-w-[1100px] mx-auto px-8 pb-16">
          <WireframeNav />
          <WireframeHero />
          <WireframeAbout />
          <WireframeProjects />
          <WireframeSkills />
          <WireframeTestimonios />
          <WireframeContact />
        </div>
      </section>

      {/* MOBILE VIEW */}
      <section className="lg:hidden">
        <div className="portfolio-shell portfolio-shell-mobile max-w-[390px] mx-auto px-4 pb-16">
          <WireframeNav mobile />
          <WireframeHero mobile />
          <WireframeAbout mobile />
          <WireframeProjects mobile />
          <WireframeSkills mobile />
          <WireframeTestimonios mobile />
          <WireframeContact mobile />
        </div>
      </section>
    </div>
  )
}
