import ProcessSection from "./process"

interface Props {
  mobile?: boolean
  lang: 'es' | 'en'
}

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

export default function ProjectsSection({ mobile, lang }: Props) {
  const copy =
    lang === 'en'
      ? {
          section: '03 - Projects',
          meta: '5 case studies + process',
          description: 'Description',
          problem: 'Problem Solved',
          approach: 'Technical Approach',
          keyDecision: 'Key Decision',
          technologies: 'Technologies',
          caseStudy: '[ VIEW CASE STUDY ]',
        }
      : {
          section: '03 - Proyectos',
          meta: '5 casos de estudio + proceso',
          description: 'Descripción',
          problem: 'Problema Resuelto',
          approach: 'Enfoque Técnico',
          keyDecision: 'Decisión Clave',
          technologies: 'Tecnologías',
          caseStudy: '[ VER ESTUDIO DE CASO ]',
        }

  const localizedProjects =
    lang === 'en'
      ? [
          {
            title: 'AlmasEnAccion',
            type: 'Frontend',
            description: 'Web platform for discovering and interacting with social initiatives, focused on visibility and community engagement.',
            problem: 'Small social initiatives have low exposure and lack structured digital tools to connect with users.',
            approach: 'Component-based SPA architecture focused on modularity and scalability. Decoupled REST API consumption.',
            technologies: ['JavaScript', 'HTML5 + CSS3', 'Component Architecture', 'REST Integration'],
            keyDecision: 'Clear separation between presentation layer and data logic (frontend-backend decoupling). Dynamic rendering for evolving content.',
          },
          {
            title: 'AlmasEnAccionBackend',
            type: 'Backend',
            description: 'REST API that supports the business logic of the platform, managing users, initiatives, and data persistence.',
            problem: 'Centralizes business logic and enables scaling while maintaining data consistency and secure operations.',
            approach: 'REST architecture for easy integrations. Layered separation (routes, controllers, models) for maintainability.',
            technologies: ['Node.js', 'Express', 'Database', 'REST Architecture'],
            keyDecision: 'REST-first design for multi-client integration. Layered separation to improve maintainability and scalability.',
          },
          {
            title: 'Colegio Mentes Creativas',
            type: 'Full-Stack',
            description: 'Academic management web system to manage students, courses, and educational processes.',
            problem: 'Reduces dependence on manual workflows and improves data organization in educational settings.',
            approach: 'Implemented full CRUD features for academic data management. Designed user-friendly interfaces for non-technical users.',
            technologies: ['JavaScript', 'HTML + CSS', 'Structured CRUD', 'Database'],
            keyDecision: 'Data normalization to avoid redundancy. Simple interfaces to reduce user learning curve.',
          },
          {
            title: 'PlayTubeMusic',
            type: 'Frontend',
            description: 'Web app for multimedia playback, integrating external sources for music consumption.',
            problem: 'Centralizes multimedia access into a more controlled and customizable experience than traditional platforms.',
            approach: 'Implemented browser-based playback logic. Integrated external APIs for dynamic content retrieval.',
            technologies: ['JavaScript', 'External APIs', 'HTML5 + CSS3', 'Event Handling'],
            keyDecision: 'Use external APIs to avoid redundant storage. Efficient state handling to prevent inconsistencies.',
          },
          {
            title: 'PlayTubeMusicBackend',
            type: 'Backend',
            description: 'Backend that manages users, preferences, and persistent data for the multimedia app.',
            problem: 'Enables personalization (playlists, history, users) that is not possible using external APIs alone.',
            approach: 'Designed endpoints for user and custom data management. Implemented persistence logic for playlists and history.',
            technologies: ['Node.js', 'Express', 'Database', 'REST API'],
            keyDecision: 'Separation between external data (API) and internal data (users). Endpoint design focused on low coupling.',
          },
        ]
      : projects

  return (
    <section id="projects" className={`border-b-2 border-black py-12 scroll-mt-20 ${mobile ? "py-8" : ""}`}>
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs tracking-widest uppercase font-bold">{copy.section}</span>
        <div className="flex-1 border-t border-black" />
        <span className="text-xs text-gray-500">{copy.meta}</span>
      </div>

      <div className="flex flex-col gap-6">
        {localizedProjects.map((project, i) => (
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
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-500">{copy.description}</p>
                <p className="text-sm text-gray-800 leading-relaxed mb-3">{project.description}</p>
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-500">{copy.problem}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{project.problem}</p>
              </div>

              {/* Technical approach */}
              <div className={`p-4 ${!mobile ? "border-r-2 border-black" : "border-b-2 border-black"}`}>
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-500">{copy.approach}</p>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">{project.approach}</p>
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-500">{copy.keyDecision}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{project.keyDecision}</p>
              </div>

              {/* Technologies */}
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">{copy.technologies}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="border border-black text-xs px-2 py-0.5">{tech}</span>
                  ))}
                </div>
                <div className="mt-4 border-t border-gray-300 pt-3">
                  <div className="border-2 border-dashed border-gray-400 text-center py-2 text-xs text-gray-400 tracking-widest">
                    {copy.caseStudy}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t-2 border-black pt-6">
        <ProcessSection mobile={mobile} embedded lang={lang} />
      </div>
    </section>
  )
}
