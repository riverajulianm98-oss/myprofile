import NavBar from "./components/NavBar"
import ProjectCard from "./components/ProjectCard"
import { projects } from "../lib/projects"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <NavBar />

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-purple-800 via-blue-800 to-indigo-800 py-32 px-4 pt-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-bounce delay-1000"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
            Julián Rivera
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 drop-shadow-lg">
            Desarrollador Full Stack | Creador de Experiencias Digitales
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full text-lg font-semibold shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/80 transition-all duration-300 hover:scale-110 hover:rotate-1">
              Ver Proyectos
            </a>
            <a href="#contact" className="px-8 py-4 border-2 border-cyan-300 rounded-full text-lg font-semibold hover:bg-cyan-300 hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-cyan-300/50">
              Contactar
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent animate-pulse">
            Sobre Mí
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-8">
            Soy un apasionado desarrollador full stack con experiencia en crear aplicaciones web innovadoras y escalables.
            Me especializo en tecnologías modernas como React, Next.js, Node.js y bases de datos NoSQL.
            Mi objetivo es transformar ideas en realidades digitales que impacten positivamente a usuarios y empresas.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-lg hover:shadow-purple-400/50 transition-all duration-300 hover:scale-105 hover:rotate-2">
              <h3 className="text-xl font-semibold mb-2">React</h3>
              <p className="text-sm text-gray-200">Frontend moderno</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-lg hover:shadow-blue-400/50 transition-all duration-300 hover:scale-105 hover:rotate-2">
              <h3 className="text-xl font-semibold mb-2">Next.js</h3>
              <p className="text-sm text-gray-200">SSR & SSG</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg shadow-lg hover:shadow-green-400/50 transition-all duration-300 hover:scale-105 hover:rotate-2">
              <h3 className="text-xl font-semibold mb-2">Node.js</h3>
              <p className="text-sm text-gray-200">Backend robusto</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg shadow-lg hover:shadow-orange-400/50 transition-all duration-300 hover:scale-105 hover:rotate-2">
              <h3 className="text-xl font-semibold mb-2">MongoDB</h3>
              <p className="text-sm text-gray-200">Bases de datos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-red-500/5"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-pulse">
            Mis Proyectos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-pink-500/10 to-purple-500/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-red-300 to-pink-300 bg-clip-text text-transparent animate-pulse">
            ¡Hablemos!
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            ¿Tienes un proyecto en mente? ¿Quieres colaborar? Estoy disponible para discutir nuevas oportunidades.
          </p>
          <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-8 rounded-xl shadow-2xl border border-gray-600 hover:shadow-red-500/20 transition-all duration-300">
            <div className="text-2xl font-semibold mb-4 text-cyan-300">Contacto</div>
            <div className="text-lg text-gray-200 mb-2">Email: rivera.julian.m98@gmail.com</div>
            <div className="text-lg text-gray-200 mb-4">Disponible para proyectos freelance y colaboraciones</div>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="mailto:rivera.julian.m98@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/80 transition-all duration-300 hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-white">
                  <path
                    fill="currentColor"
                    d="M2.25 4.5C2.25 3.12 3.37 2 4.75 2h14.5c1.38 0 2.5 1.12 2.5 2.5v15c0 1.38-1.12 2.5-2.5 2.5H4.75A2.75 2.75 0 0 1 2 19.5v-15Zm16.69 2.8L12 12.6 4.81 7.3a.75.75 0 0 0-.81 1.24l8.25 6.13a.75.75 0 0 0 .9 0l8.25-6.13a.75.75 0 0 0-.81-1.24Z"
                  />
                </svg>
                Enviar Email
              </a>
              <a
                href="https://github.com/riverajulianm98-oss"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-white">
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.16 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.02 1.53 1.02.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.61 9.61 0 0 1 12 6.8c.85.004 1.71.12 2.51.35 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.001 10.001 0 0 0 22 12c0-5.52-4.48-10-10-10Z"
                  />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/julian-rivera-0b2042399/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-blue-400">
                  <path
                    fill="currentColor"
                    d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5A2.5 2.5 0 0 1 0 3.5C0 2.12 1.1 1 2.5 1c1.38 0 2.48 1.12 2.48 2.5zM.5 8.5h4.98V24H.5V8.5zm7.5 0h4.78v2.1h.07c.67-1.27 2.31-2.6 4.76-2.6 5.09 0 6.03 3.35 6.03 7.7V24h-4.98v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V24H8V8.5z"
                  />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">© 2026 Julián Rivera. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  )
}

