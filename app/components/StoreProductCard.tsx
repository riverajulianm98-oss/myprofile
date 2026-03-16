"use client"

import Image from "next/image"
import Link from "next/link"
import type { StoreProduct } from "../../lib/store"

type Props = {
  product: StoreProduct
}

export default function StoreProductCard({ product }: Props) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600/10 to-cyan-600/10">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
          <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-semibold tracking-wide">
            {product.categories[0]}
          </span>
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold tracking-tight text-white">{product.name}</h3>
        <p className="mt-2 text-sm text-gray-300 line-clamp-3">{product.description}</p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <Link
          href={`/store/${product.id}`}
          className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
        >
          Ver detalles
        </Link>
        <span className="text-xs text-gray-400">Stock: {product.stock}</span>
      </div>
    </article>
  )
}
