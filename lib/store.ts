export type StoreProduct = {
  id: string
  name: string
  price: number
  description: string
  image: string
  categories: string[]
  stock: number
}

export const storeProducts: StoreProduct[] = [
  {
    id: "headphones-pro",
    name: "Auriculares Pro-X",
    price: 129.99,
    description: "Auriculares inalámbricos con cancelación de ruido, sonido envolvente y batería de 30 horas.",
    image: "/products/headphones.svg",
    categories: ["Audio", "Wireless", "Premium"],
    stock: 24,
  },
  {
    id: "smartwatch-neo",
    name: "Smartwatch NEO",
    price: 199.99,
    description: "Reloj inteligente con monitoreo de salud, GPS y pantalla AMOLED.",
    image: "/products/smartwatch.svg",
    categories: ["Wearables", "Fitness"],
    stock: 14,
  },
  {
    id: "keyboard-mecha",
    name: "Teclado mecánico RGB",
    price: 89.99,
    description: "Teclado mecánico compacto con retroiluminación RGB y switches táctiles.",
    image: "/products/keyboard.svg",
    categories: ["Periféricos", "Gaming"],
    stock: 32,
  },
  {
    id: "mouse-pro",
    name: "Mouse Pro Gamer",
    price: 69.99,
    description: "Mouse ergonómico con sensor de alta precisión y ajustes de DPI.",
    image: "/products/mouse.svg",
    categories: ["Periféricos", "Gaming"],
    stock: 18,
  },
]
