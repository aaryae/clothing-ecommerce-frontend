import { productCardInterface } from '@interface/product.interface'
import { createContext, ReactNode, useState } from 'react'

interface CartContextType {
  cartItems: productCardInterface[]
  selectedProduct: productCardInterface | null
  addToCart: (product: productCardInterface) => void
  setSelectedProduct: (product: productCardInterface | null) => void
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<productCardInterface[]>([])
  const [selectedProduct, setSelectedProduct] = useState<productCardInterface | null>(null)

  const addToCart = (product: productCardInterface) => {
    setCartItems((prevItems) => [...prevItems, product])
  }

  return (
    <CartContext.Provider
      value={{ cartItems, selectedProduct, addToCart, setSelectedProduct }}
    >
      {children}
    </CartContext.Provider>
  )
}


