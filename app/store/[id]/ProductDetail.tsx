"use client"

import Image from "next/image"
import { useMemo } from "react"
import type { StoreProduct } from "../../../lib/store"

type Props = {
  product: StoreProduct
}

export default function ProductDetail({ product }: Props) {


  const formattedPrice = useMemo(() => product.price.toFixed(2), [product.price])

  return (
    <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start">
      <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 to-cyan-900 md:max-w-md">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <span className="rounded-full bg-black/50 px-3 py-1 text-sm font-semibold">${formattedPrice}</span>
        </div>
      </div>

      <div className="flex-1">
        <h1 className="text-5xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-300 mb-6 max-w-2xl">{product.description}</p>

        <div className="flex flex-wrap gap-3 mb-8">
          {product.categories.map((category) => (
            <span
              key={category}
              className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="text-sm text-gray-300 mt-4">
          Stock: <span className="font-medium">{product.stock}</span>
        </div>
      </div>
    </div>
  )
}
