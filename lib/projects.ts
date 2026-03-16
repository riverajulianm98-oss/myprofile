export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  href?: string
  accent: "cyan" | "pink" | "green" | "yellow"
}

export const projects: Project[] = [
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "Plataforma completa de comercio electrónico con pagos integrados, gestión de inventario y panel de administración.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    href: "/store",
    accent: "cyan",
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones y sincronización multiplataforma.",
    tags: ["Next.js", "TypeScript", "Firebase"],
    href: "/projects/task-management-app",
    accent: "pink",
  },
  {
    slug: "data-visualization-dashboard",
    title: "Data Visualization Dashboard",
    description:
      "Dashboard interactivo para visualización de datos con gráficos en tiempo real y exportación de reportes.",
    tags: ["D3.js", "Python", "Flask"],
    href: "/projects/data-visualization-dashboard",
    accent: "green",
  },
  {
    slug: "landing-page-pro",
    title: "Landing Page Pro",
    description:
      "Landing page moderna con animaciones, formularios y seguimiento de conversiones.",
    tags: ["Tailwind", "Framer Motion", "SEO"],
    href: "/projects/landing-page-pro",
    accent: "yellow",
  },
]
