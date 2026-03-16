"use client"

import { useState } from "react"

export default function LandingPagePro() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-950 via-orange-950 to-red-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 to-orange-900/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Landing Page Pro
          </h1>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Convierte visitantes en clientes con una landing page moderna, optimizada para conversiones y SEO.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-yellow-500 rounded-full font-semibold text-black hover:bg-yellow-400 transition transform hover:scale-105">
              Comenzar Ahora
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition">
              Ver Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Características Principales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rápido y Optimizado</h3>
              <p className="text-gray-300">Carga en menos de 2 segundos con optimización automática de imágenes y código.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p className="text-gray-300">Se ve perfecto en desktop, tablet y móvil con diseño adaptativo.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Analytics Integrado</h3>
              <p className="text-gray-300">Seguimiento de conversiones y comportamiento de usuarios en tiempo real.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Lo Que Dicen Nuestros Clientes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-gray-300 mb-4 italic">
                &quot;Esta landing page aumentó nuestras conversiones en un 300%. ¡Increíble!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-lg font-bold">JS</span>
                </div>
                <div>
                  <p className="font-semibold">Juan Sánchez</p>
                  <p className="text-sm text-gray-400">CEO, TechCorp</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-gray-300 mb-4 italic">
                &quot;El diseño es moderno y la implementación fue rápida. Altamente recomendado.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-lg font-bold">MR</span>
                </div>
                <div>
                  <p className="font-semibold">María Rodríguez</p>
                  <p className="text-sm text-gray-400">Marketing Manager, InnovateCo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para Aumentar tus Conversiones?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Únete a cientos de empresas que han transformado su presencia online.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email"
                required
                className="flex-1 px-4 py-3 rounded-full border border-white/20 bg-black/40 text-white placeholder:text-gray-400 focus:border-yellow-400 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-yellow-500 rounded-full font-semibold text-black hover:bg-yellow-400 transition"
              >
                Suscribirse
              </button>
            </div>
            {submitted && (
              <p className="mt-4 text-green-400">¡Gracias por suscribirte! Te contactaremos pronto.</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Landing Page Pro. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  )
}