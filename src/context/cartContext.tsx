import { productCardInterface } from '@interface/product.interface'
import { createContext, ReactNode, useState } from 'react'

interface CartContextType {
  cartItems: (productCardInterface & { quantity: number })[]
  selectedProduct: productCardInterface | null
  addToCart: (product: productCardInterface, quantity: number) => void
  setSelectedProduct: (product: productCardInterface | null) => void
  updateCartQuantity: (productId: string, quantity: number) => void
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<(productCardInterface & { quantity: number })[]>([])
  const [selectedProduct, setSelectedProduct] = useState<productCardInterface | null>(null)

  // Add a product to the cart with a specified quantity
  const addToCart = (product: productCardInterface, quantity: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      }
      return [...prevItems, { ...product, quantity }]
    })
  }

  // Update the quantity of a specific product in the cart
  const updateCartQuantity = (productId: string, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === productId ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 } : item))
    )
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        selectedProduct,
        addToCart,
        setSelectedProduct,
        updateCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
