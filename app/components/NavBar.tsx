"use client"

import { useState } from "react"
import Link from "next/link"

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold tracking-wider text-cyan-300">JR</div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-200">
          <a href="#about" className="hover:text-white transition">
            Sobre mí
          </a>
          <a href="#projects" className="hover:text-white transition">
            Proyectos
          </a>
          <Link href="/store" className="hover:text-white transition">
            Tienda
          </Link>
          <a href="#contact" className="hover:text-white transition">
            Contacto
          </a>
        </nav>

        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            className="px-3 py-2 rounded-full bg-cyan-500/20 text-cyan-200 hover:bg-cyan-500/40 transition"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Cerrar" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3 text-gray-200">
            <a
              href="#about"
              className="rounded-lg px-3 py-2 hover:bg-white/10 transition"
              onClick={() => setOpen(false)}
            >
              Sobre mí
            </a>
            <a
              href="#projects"
              className="rounded-lg px-3 py-2 hover:bg-white/10 transition"
              onClick={() => setOpen(false)}
            >
              Proyectos
            </a>
            <Link
              href="/store"
              className="rounded-lg px-3 py-2 hover:bg-white/10 transition"
              onClick={() => setOpen(false)}
            >
              Tienda
            </Link>
            <a
              href="#contact"
              className="rounded-lg px-3 py-2 hover:bg-white/10 transition"
              onClick={() => setOpen(false)}
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
