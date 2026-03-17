import Link from "next/link"
import { projects } from "../../../lib/projects"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default function ProjectDetailPage({ params }: any) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl font-bold mb-4">Proyecto no encontrado</h1>
          <p className="text-gray-300 mb-6">Lo siento, no pudimos encontrar el proyecto que estás buscando.</p>
          <Link href="/" className="inline-block px-6 py-3 bg-cyan-500 rounded-full font-semibold hover:bg-cyan-400 transition">
            Volver al inicio
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-cyan-300 hover:text-white transition mb-8">
          ← Volver
        </Link>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {project.title}
        </h1>
        <p className="text-lg text-gray-300 mb-10">{project.description}</p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-white/5 p-6 border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">Stack Tecnológico</h2>
            <ul className="space-y-2">
              {project.tags.map((tag) => (
                <li key={tag} className="text-gray-200">
                  • {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-white/5 p-6 border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">Próximos pasos</h2>
            <p className="text-gray-300">
              Aquí puedes describir cómo implementaste este proyecto, qué desafíos resolviste y qué aprendizajes obtuviste.
              Agrega capturas de pantalla, enlaces a repositorios y demos en vivo.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

