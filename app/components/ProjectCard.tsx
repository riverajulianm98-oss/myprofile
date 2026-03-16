type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  href?: string
  accent: "cyan" | "pink" | "green" | "yellow"
}

const accentColors: Record<Project["accent"], string> = {
  cyan: "from-cyan-400/30 to-purple-400/30 text-cyan-200 border-cyan-400/50",
  pink: "from-pink-400/30 to-orange-400/30 text-pink-200 border-pink-400/50",
  green: "from-green-400/30 to-blue-400/30 text-green-200 border-green-400/50",
  yellow: "from-yellow-400/30 to-red-400/30 text-yellow-200 border-yellow-400/50",
}

export default function ProjectCard({ slug, title, description, tags, href, accent }: Project) {
  return (
    <article className="group relative bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-1 border border-gray-600 overflow-hidden">
      <div
        className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${accentColors[accent]} border`}
      />
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-200 mb-4 group-hover:text-white transition-colors duration-300">{description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/20 text-white/90 rounded-full text-xs hover:bg-white/30 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={href ?? `/projects/${slug}`}
          target={href ? "_blank" : "_self"}
          rel={href ? "noreferrer" : undefined}
          className="inline-flex items-center gap-2 font-semibold text-white hover:text-yellow-300 transition-all duration-300 group-hover:scale-105"
        >
          Ver proyecto
          <span aria-hidden className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>
    </article>
  )
}
