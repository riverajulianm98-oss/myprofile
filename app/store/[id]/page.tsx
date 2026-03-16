import Link from "next/link"
import { storeProducts } from "../../../lib/store"
import ProductDetail from "./ProductDetail"

type Props = {
  params: {
    id: string
  }
}

export function generateStaticParams() {
  return storeProducts.map((product) => ({ id: product.id }))
}

export default function ProductDetailPage({ params }: any) {
  const product = storeProducts.find((p) => p.id === params.id)

  if (!product) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl font-bold mb-4">Producto no encontrado</h1>
          <p className="text-gray-300 mb-6">Lo siento, no pudimos encontrar este producto en la tienda.</p>
          <Link
            href="/store"
            className="inline-block px-6 py-3 bg-cyan-500 rounded-full font-semibold hover:bg-cyan-400 transition"
          >
            Volver a la tienda
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <Link href="/store" className="inline-flex items-center gap-2 text-cyan-300 hover:text-white transition mb-8">
          ← Volver a la tienda
        </Link>

        <ProductDetail product={product} />

        <div className="rounded-2xl bg-white/5 p-8 border border-white/10">
          <h2 className="text-2xl font-semibold mb-4">Detalles técnicos</h2>
          <ul className="text-gray-300 space-y-2">
            <li>• Configuración de UI moderna con Next.js y Tailwind</li>
            <li>• Rutas dinámicas usando <code>app/store/[id]</code></li>
            {/* <li>• Carrito de compras con React Context</li> */}
          </ul>
        </div>
      </div>
    </main>
  )
}
