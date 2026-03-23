interface Props { mobile?: boolean }

const projects = [
  {
    title: "AlmasEnAccion",
    type: "Frontend",
    description: "Web platform for a nonprofit organization to manage and display social action initiatives.",
    problem: "The organization lacked a structured digital presence to communicate their activities and attract volunteers.",
    approach: "Component-based SPA architecture with a focus on content hierarchy and accessibility.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Axios"],
    keyDecision: "Separated data-fetching logic from UI components to allow easy backend swapping.",
  },
  {
    title: "AlmasEnAccionBackend",
    type: "Backend",
    description: "REST API powering the AlmasEnAccion platform, handling users, initiatives, and media.",
    problem: "No structured backend existed to centralize nonprofit data and support multiple clients.",
    approach: "Layered architecture (Controllers → Services → Repository) with documented endpoints.",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
    keyDecision: "Chose REST over GraphQL to keep complexity low for a small, stable data model.",
  },
  {
    title: "Colegio Mentes Creativas",
    type: "Full-Stack",
    description: "School management system for a private institution — students, grades, and schedules.",
    problem: "Administrative staff relied on spreadsheets, causing data inconsistency and high manual effort.",
    approach: "Modular monolith with role-based access (admin, teacher, parent) and audit logging.",
    technologies: ["React", "Spring Boot", "MySQL", "Docker"],
    keyDecision: "Implemented RBAC at the API layer, not the database, to simplify query logic.",
  },
  {
    title: "PlayTubeMusic",
    type: "Frontend",
    description: "Music streaming interface allowing users to browse, search, and play tracks from a catalog.",
    problem: "Users needed a clean, responsive interface to explore and consume music without friction.",
    approach: "Global state management for playback context, with lazy-loaded route-based code splitting.",
    technologies: ["React", "Redux Toolkit", "Styled Components", "Web Audio API"],
    keyDecision: "Decoupled the player state from the UI tree to prevent unnecessary re-renders.",
  },
  {
    title: "PlayTubeMusicBackend",
    type: "Backend",
    description: "API service for the PlayTubeMusic app — user auth, track catalog, and stream endpoints.",
    problem: "Needed efficient audio file serving and metadata management at scale without heavy infrastructure.",
    approach: "Streaming endpoint with chunked transfer encoding; metadata indexed separately from file storage.",
    technologies: ["Node.js", "Express", "MongoDB", "AWS S3"],
    keyDecision: "Stored audio files in object storage (S3) and served signed URLs to avoid proxying large files.",
  },
]

export default function WireframeProjects({ mobile }: Props) {
  return (
    <section className={`border-b-2 border-black py-12 ${mobile ? "py-8" : ""}`}>
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs tracking-widest uppercase font-bold">03 — Projects</span>
        <div className="flex-1 border-t border-black" />
        <span className="text-xs text-gray-500">5 case studies</span>
      </div>

      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <div key={project.title} className="border-2 border-black">
            {/* Project header bar */}
            <div className="border-b-2 border-black px-4 py-2 flex items-center justify-between bg-gray-100">
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500 font-bold">{String(i + 1).padStart(2, "0")}</span>
                <span className={`font-bold tracking-tight ${mobile ? "text-base" : "text-lg"}`}>{project.title}</span>
              </div>
              <span className="border border-black text-xs px-2 py-0.5 font-bold tracking-widest">{project.type.toUpperCase()}</span>
            </div>

            <div className={`grid gap-0 ${mobile ? "grid-cols-1" : "grid-cols-[2fr_1fr_1fr]"}`}>
              {/* Description + Problem */}
              <div className={`p-4 ${!mobile ? "border-r-2 border-black" : "border-b-2 border-black"}`}>
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-500">Description</p>
                <p className="text-sm text-gray-800 leading-relaxed mb-3">{project.description}</p>
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-500">Problem Solved</p>
                <p className="text-sm text-gray-700 leading-relaxed">{project.problem}</p>
              </div>

              {/* Technical approach */}
              <div className={`p-4 ${!mobile ? "border-r-2 border-black" : "border-b-2 border-black"}`}>
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-500">Technical Approach</p>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">{project.approach}</p>
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-500">Key Decision</p>
                <p className="text-sm text-gray-700 leading-relaxed">{project.keyDecision}</p>
              </div>

              {/* Technologies */}
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="border border-black text-xs px-2 py-0.5">{tech}</span>
                  ))}
                </div>
                <div className="mt-4 border-t border-gray-300 pt-3">
                  <div className="border-2 border-dashed border-gray-400 text-center py-2 text-xs text-gray-400 tracking-widest">
                    [ VIEW CASE STUDY ]
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
