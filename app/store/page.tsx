"use client"

import { useMemo, useState } from "react"
import StoreProductCard from "../components/StoreProductCard"
import { storeProducts } from "../../lib/store"

export default function StorePage() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("Todos")

  const categories = useMemo(() => {
    const all = storeProducts.flatMap((product) => product.categories)
    return ["Todos", ...Array.from(new Set(all))]
  }, [])

  const filtered = useMemo(() => {
    return storeProducts.filter((product) => {
      const matchesQuery =
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      const matchesCategory = category === "Todos" || product.categories.includes(category)
      return matchesQuery && matchesCategory
    })
  }, [query, category])

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="bg-gradient-to-br from-purple-950 via-blue-950 to-indigo-950 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Tienda Demo
          </h1>
          <p className="mt-4 text-center text-gray-300 max-w-2xl mx-auto">
            Experimenta una demo de tienda con productos, páginas de detalle y carrito.
            Proyecto ejemplar para mostrar tus habilidades full stack.
          </p>

          <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:w-1/2">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar productos..."
                className="w-full rounded-full border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full max-w-xs rounded-full border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((product) => (
              <StoreProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-gray-400">No se encontraron productos.</p>
          )}
        </div>
      </section>
    </main>
  )
}
