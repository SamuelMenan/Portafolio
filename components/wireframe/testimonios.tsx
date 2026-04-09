import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface Props { mobile?: boolean }

interface Testimonio {
  name: string
  role: string
  quote: string
}

const testimonios: Testimonio[] = [
  {
    name: "Santiago Bustos Lopez",
    role: "Colaborador en AlmasEnAccion",
    quote:
      "Samuel no solo programa rápido: primero aterriza requisitos, organiza la arquitectura y recién después ejecuta. Eso nos evitó retrabajo y reuniones eternas.",
  },
  {
    name: "Julio Esteban Bolaños Benabides",
    role: "Compañero de equipo en frontend",
    quote:
      "En cada entrega de interfaz se notó su enfoque en estructura y consistencia. Sus componentes quedaron claros, reutilizables y fáciles de mantener.",
  },
  {
    name: "Michael David Lagos Rosero",
    role: "Desarrollador",
    quote:
      "Trabajar con Samuel fue simple porque documenta decisiones técnicas y contratos de API. Integrar frontend con backend fue ordenado desde el día uno.",
  },
  {
    name: "Nicolas Alejandro Bastidas Calvache",
    role: "Desarrollador backend",
    quote:
      "Su fortaleza es convertir ideas dispersas en un plan de trabajo concreto. Cumple tiempos, comunica avances y cuida la calidad del código final.",
  },
]

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("")
}

interface Props {
  mobile?: boolean
  lang: 'es' | 'en'
}

export default function WireframeTestimonios({ mobile, lang }: Props) {
  const localizedTestimonios =
    lang === 'en'
      ? [
          {
            name: 'Santiago Bustos Lopez',
            role: 'Contributor at AlmasEnAccion',
            quote:
              'Samuel does not just code fast: he first grounds requirements, organizes architecture, and only then executes. That saved us from rework and endless meetings.',
          },
          {
            name: 'Julio Esteban Bolaños Benabides',
            role: 'Frontend teammate',
            quote:
              'In every interface delivery, his focus on structure and consistency stood out. His components were clear, reusable, and easy to maintain.',
          },
          {
            name: 'Michael David Lagos Rosero',
            role: 'Developer',
            quote:
              'Working with Samuel was smooth because he documents technical decisions and API contracts. Integrating frontend and backend was organized from day one.',
          },
          {
            name: 'Nicolas Alejandro Bastidas Calvache',
            role: 'Backend developer',
            quote:
              'His strength is turning scattered ideas into a concrete work plan. He meets timelines, communicates progress, and protects final code quality.',
          },
        ]
      : testimonios

  const copy =
    lang === 'en'
      ? {
          section: '05 - Testimonials',
          references: 'References',
          title: 'Partners and collaborators who support my work',
          body:
            'These testimonials summarize how I approach each project: requirements analysis, architecture planning, and execution focused on quality, maintainability, and clear outcomes.',
        }
      : {
          section: '05 - Testimonios',
          references: 'Referencias',
          title: 'Socios y colaboradores que respaldan mi trabajo',
          body:
            'Estos testimonios resumen cómo abordo cada proyecto: análisis de requisitos, planificación de arquitectura y ejecución con foco en calidad, mantenibilidad y resultados claros.',
        }

  return (
    <section id="testimonials" className={`border-b-2 border-black py-12 scroll-mt-20 ${mobile ? "py-8" : ""}`}>
      <div className="flex items-center gap-4 mb-5">
        <span className="text-xs tracking-widest uppercase font-bold">{copy.section}</span>
        <div className="flex-1 border-t border-black" />
      </div>

      <div className={`mb-8 ${mobile ? "" : "max-w-3xl"}`}>
        <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-2">{copy.references}</p>
        <h2 className={`font-bold tracking-tight leading-tight mb-3 ${mobile ? "text-2xl" : "text-3xl"}`}>
          {copy.title}
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          {copy.body}
        </p>
      </div>

      <div className={`grid gap-4 ${mobile ? "grid-cols-1" : "grid-cols-2 lg:grid-cols-4"}`}>
        {localizedTestimonios.map((testimonio) => (
          <article key={testimonio.name} className="border-2 border-black bg-gray-50">
            <header className="border-b border-black px-4 py-3 flex items-center gap-3">
              <Avatar className="size-10 border border-black">
                <AvatarFallback className="bg-gray-200 text-black text-xs font-bold tracking-widest">
                  {getInitials(testimonio.name)}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-wide leading-tight">{testimonio.name}</p>
                <p className="text-xs text-gray-600 leading-tight mt-1">{testimonio.role}</p>
              </div>
            </header>

            <div className="px-4 py-4">
              <p className="text-sm text-gray-700 leading-relaxed">"{testimonio.quote}"</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}