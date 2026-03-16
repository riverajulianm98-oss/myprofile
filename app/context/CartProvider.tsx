"use client"

import React, { createContext, useContext, useMemo, useState } from "react"
import type { StoreProduct } from "../../lib/store"

export type CartItem = {
  product: StoreProduct
  quantity: number
}

type CartContextValue = {
  items: CartItem[]
  add: (product: StoreProduct) => void
  remove: (productId: string) => void
  clear: () => void
  total: number
  totalItems: number
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const add = (product: StoreProduct) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
  }

  const remove = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId))
  }

  const clear = () => setItems([])

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [items]
  )

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  )

  return (
    <CartContext.Provider value={{ items, add, remove, clear, total, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
