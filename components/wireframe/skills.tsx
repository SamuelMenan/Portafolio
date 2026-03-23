interface Props { mobile?: boolean }

const skillGroups = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "TailwindCSS", "Redux Toolkit", "HTML5 / CSS3", "Styled Components", "Vite"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Spring Boot", "REST APIs", "JWT Auth", "PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Tools",
    items: ["Git / GitHub", "Docker", "AWS S3", "Figma", "Postman", "VS Code", "IntelliJ IDEA"],
  },
  {
    category: "Concepts",
    items: ["C4 Architecture", "RBAC", "Layered Architecture", "Component Design", "ER Diagrams", "UML / Flow Charts", "Clean Code"],
  },
]

export default function WireframeSkills({ mobile }: Props) {
  return (
    <section className={`border-b-2 border-black py-12 ${mobile ? "py-8" : ""}`}>
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs tracking-widest uppercase font-bold">04 — Skills</span>
        <div className="flex-1 border-t border-black" />
      </div>

      <div className={`grid gap-4 ${mobile ? "grid-cols-1" : "grid-cols-2 lg:grid-cols-4"}`}>
        {skillGroups.map((group) => (
          <div key={group.category} className="border-2 border-black">
            {/* Group label */}
            <div className="border-b-2 border-black px-4 py-2 bg-gray-100">
              <span className="text-xs font-bold tracking-widest uppercase">{group.category}</span>
            </div>
            {/* Items */}
            <div className="p-3 flex flex-col gap-1.5">
              {group.items.map((item) => (
                <div key={item} className="border border-gray-300 px-3 py-1.5 text-xs flex items-center gap-2">
                  <div className="w-1.5 h-1.5 border border-black bg-gray-400 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
