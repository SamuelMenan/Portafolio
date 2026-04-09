import type { ComponentType, CSSProperties } from 'react'
import {
  Boxes,
  Code2,
  Database,
  KeyRound,
  Cloud,
  Layers3,
  Workflow,
} from 'lucide-react'
import {
  SiDjango,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGithub,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRstudioide,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si'

interface Props {
  mobile?: boolean
  lang: 'es' | 'en'
}

type IconComponent = ComponentType<{
  className?: string
  style?: CSSProperties
  'aria-hidden'?: boolean
}>

type SkillItem = {
  es: string
  en: string
  icon: IconComponent
  color: string
}

type SkillGroup = {
  categoryEs: string
  categoryEn: string
  items: SkillItem[]
}

const skillGroups: SkillGroup[] = [
  {
    categoryEs: 'Frontend',
    categoryEn: 'Frontend',
    items: [
      { es: 'React', en: 'React', icon: SiReact, color: '#61DAFB' },
      { es: 'JavaScript', en: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { es: 'TypeScript', en: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { es: 'TailwindCSS', en: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
      { es: 'HTML5 / CSS3', en: 'HTML5 / CSS3', icon: SiHtml5, color: '#E34F26' },
      { es: 'Arquitectura SPA', en: 'SPA Architecture', icon: Boxes, color: '#C6845F' },
      { es: 'Vite', en: 'Vite', icon: SiVite, color: '#646CFF' },
    ],
  },
  {
    categoryEs: 'Backend',
    categoryEn: 'Backend',
    items: [
      { es: 'Node.js', en: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { es: 'Django', en: 'Django', icon: SiDjango, color: '#092E20' },
      { es: 'Java', en: 'Java', icon: SiOpenjdk, color: '#ED8B00' },
      { es: 'Spring Boot', en: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { es: 'PostgreSQL', en: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { es: 'MongoDB', en: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { es: 'MySQL', en: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    categoryEs: 'Herramientas',
    categoryEn: 'Tools',
    items: [
      { es: 'Git / GitHub', en: 'Git / GitHub', icon: SiGithub, color: '#F05032' },  
      { es: 'AWS S3', en: 'AWS S3', icon: Cloud, color: '#FF9900' },
      { es: 'RStudio', en: 'RStudio', icon: SiRstudioide, color: '#75AADB' },
      { es: 'Figma', en: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { es: 'Postman', en: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { es: 'VS Code', en: 'VS Code', icon: Code2, color: '#007ACC' },
      { es: 'IntelliJ IDEA', en: 'IntelliJ IDEA', icon: SiIntellijidea, color: '#8B5CF6' },
    ],
  },
  {
    categoryEs: 'Conceptos',
    categoryEn: 'Concepts',
    items: [
      { es: 'Arquitectura C4', en: 'C4 Architecture', icon: Boxes, color: '#B78E6F' },
      { es: 'Programación Orientada a Objetos', en: 'Object-Oriented Programming', icon: KeyRound, color: '#B78E6F' },
      { es: 'Arquitectura en Capas', en: 'Layered Architecture', icon: Layers3, color: '#B78E6F' },
      { es: 'Diseño de Componentes', en: 'Component Design', icon: Boxes, color: '#B78E6F' },
      { es: 'Diagramas ER', en: 'ER Diagrams', icon: Database, color: '#B78E6F' },
      { es: 'UML / Flujos', en: 'UML / Flows', icon: Workflow, color: '#B78E6F' },
      { es: 'Código Limpio', en: 'Clean Code', icon: Code2, color: '#B78E6F' },
    ],
  },
]

function renderIcon(Icon: IconComponent, color: string) {
  const SingleIcon = Icon
  return <SingleIcon className="skill-item__icon" style={{ color }} aria-hidden={true} />
}

export default function WireframeSkills({ mobile, lang }: Props) {
  return (
    <section id="skills" className={`border-b-2 border-black py-12 scroll-mt-20 ${mobile ? 'py-8' : ''}`}>
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs tracking-widest uppercase font-bold">{lang === 'en' ? '04 - Skills' : '04 - Habilidades'}</span>
        <div className="flex-1 border-t border-black" />
      </div>

      <div className={`grid gap-4 ${mobile ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-4'}`}>
        {skillGroups.map((group) => (
          <div key={group.categoryEs} className="border-2 border-black skill-group-card">
            <div className="border-b-2 border-black px-4 py-2 bg-gray-100">
              <span className="text-xs font-bold tracking-widest uppercase">
                {lang === 'en' ? group.categoryEn : group.categoryEs}
              </span>
            </div>

            <div className="p-3 flex flex-col gap-1.5">
              {group.items.map((item) => {
                const label = lang === 'en' ? item.en : item.es
                return (
                  <div key={label} className="skill-item border border-gray-300 px-3 py-2 text-xs flex items-center gap-2">
                    {renderIcon(item.icon, item.color)}
                    <span className="skill-item__label">{label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
