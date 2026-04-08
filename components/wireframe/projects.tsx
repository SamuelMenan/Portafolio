import WireframeProcess from "@/components/wireframe/process"

interface Props { mobile?: boolean }

const projects = [
  {
    title: "AlmasEnAccion",
    type: "Frontend",
    description: "Plataforma web para descubrimiento e interacción con iniciativas sociales, enfocada en visibilidad y participación comunitaria.",
    problem: "Las iniciativas sociales pequeñas tienen baja exposición y carecen de herramientas digitales estructuradas para conectar con usuarios.",
    approach: "Arquitectura SPA basada en componentes con enfoque en la modularidad y escalabilidad. Consumo de API REST desacoplada.",
    technologies: ["JavaScript", "HTML5 + CSS3", "Arquitectura Componentes", "Integración REST"],
    keyDecision: "Separación clara entre capa de presentación y lógica de datos (desacoplamiento frontend-backend). Renderizado dinámico para contenido cambiante.",
  },
  {
    title: "AlmasEnAccionBackend",
    type: "Backend",
    description: "API REST que soporta la lógica de negocio de la plataforma, gestionando usuarios, iniciativas y persistencia de datos.",
    problem: "Centraliza la lógica y permite escalar la aplicación manteniendo consistencia en los datos y seguridad en las operaciones.",
    approach: "Arquitectura REST para facilitar integración. Separación en capas (rutas, controladores, modelos) para mejorar mantenibilidad.",
    technologies: ["Node.js", "Express", "Base de Datos", "Arquitectura REST"],
    keyDecision: "Diseño REST para facilitar integración con múltiples clientes. Separación en capas para mejorar mantenibilidad y escalabilidad.",
  },
  {
    title: "Colegio Mentes Creativas",
    type: "Full-Stack",
    description: "Sistema web para gestión académica que permite administrar información de estudiantes, cursos y procesos educativos.",
    problem: "Reduce la dependencia de procesos manuales y mejora la organización de datos académicos en entornos educativos.",
    approach: "Implementé funcionalidades CRUD completas para gestión de datos académicos. Diseñé interfaces enfocadas en usabilidad para usuarios no técnicos.",
    technologies: ["JavaScript", "HTML + CSS", "CRUD Estructurado", "Base de Datos"],
    keyDecision: "Normalización de datos para evitar redundancias. Interfaces simples para reducir la curva de aprendizaje del usuario final.",
  },
  {
    title: "PlayTubeMusic",
    type: "Frontend",
    description: "Aplicación web para reproducción de contenido multimedia, integrando fuentes externas para consumo de música.",
    problem: "Centraliza el acceso a contenido multimedia en una experiencia más controlada y personalizable que las plataformas tradicionales.",
    approach: "Implementé lógica de reproducción multimedia en el navegador. Integré APIs externas para obtención dinámica de contenido.",
    technologies: ["JavaScript", "APIs Externas", "HTML5 + CSS3", "Manejo de Eventos"],
    keyDecision: "Uso de APIs externas para evitar almacenamiento redundante de contenido. Manejo eficiente del estado para evitar inconsistencias.",
  },
  {
    title: "PlayTubeMusicBackend",
    type: "Backend",
    description: "Backend que gestiona usuarios, preferencias y datos persistentes para la aplicación multimedia.",
    problem: "Permite personalización (playlists, historial, usuarios) que no es posible solo con APIs externas.",
    approach: "Diseñé endpoints para gestión de usuarios y datos personalizados. Implementé lógica para persistencia de playlists e historial.",
    technologies: ["Node.js", "Express", "Base de Datos", "API REST"],
    keyDecision: "Separación entre datos externos (API) y datos internos (usuarios). Diseño de endpoints enfocados en bajo acoplamiento.",
  },
]

export default function WireframeProjects({ mobile }: Props) {
  return (
    <section className={`border-b-2 border-black py-12 ${mobile ? "py-8" : ""}`}>
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs tracking-widest uppercase font-bold">03 — Proyectos</span>
        <div className="flex-1 border-t border-black" />
        <span className="text-xs text-gray-500">5 casos de estudio + proceso</span>
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
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-500">Descripción</p>
                <p className="text-sm text-gray-800 leading-relaxed mb-3">{project.description}</p>
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-500">Problema Resuelto</p>
                <p className="text-sm text-gray-700 leading-relaxed">{project.problem}</p>
              </div>

              {/* Technical approach */}
              <div className={`p-4 ${!mobile ? "border-r-2 border-black" : "border-b-2 border-black"}`}>
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-500">Enfoque Técnico</p>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">{project.approach}</p>
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-500">Decisión Clave</p>
                <p className="text-sm text-gray-700 leading-relaxed">{project.keyDecision}</p>
              </div>

              {/* Technologies */}
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Tecnologías</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="border border-black text-xs px-2 py-0.5">{tech}</span>
                  ))}
                </div>
                <div className="mt-4 border-t border-gray-300 pt-3">
                  <div className="border-2 border-dashed border-gray-400 text-center py-2 text-xs text-gray-400 tracking-widest">
                    [ VER ESTUDIO DE CASO ]
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t-2 border-black pt-6">
        <WireframeProcess mobile={mobile} embedded />
      </div>
    </section>
  )
}
