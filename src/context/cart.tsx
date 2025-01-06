import { productCardInterface } from '@interface/product.interface'
import { createContext, ReactNode, useState } from 'react'

interface CartContextType {
  cartItems: productCardInterface[]
  addToCart: (product: productCardInterface) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<productCardInterface[]>([])

  const addToCart = (product: productCardInterface) => {
    setCartItems((prevItems) => [...prevItems, product])
  }

  return <CartContext.Provider value={{ cartItems, addToCart }}>{children}</CartContext.Provider>
}
