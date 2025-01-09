import { productCardInterface } from '@interface/product.interface'
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

interface CartContextType {
  quantity: number
  cartItems: (productCardInterface & { quantity?: number })[] 
  selectedProduct: productCardInterface | null
  setQuantity: Dispatch<SetStateAction<number>>
  addToCart: (product: productCardInterface) => void
  setSelectedProduct: (product: productCardInterface | null) => void
  updateCartQuantity: (productId: string, quantity: number) => void 
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<(productCardInterface & { quantity?: number })[]>([])
  const [selectedProduct, setSelectedProduct] = useState<productCardInterface | null>(null)
  const [quantity, setQuantity] = useState<number>(1)

  // Add a product to the cart, updating the quantity if it already exists
  const addToCart = (product: productCardInterface) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.id === product.id)
      if (existingItemIndex !== -1) {
        // Update quantity of existing product
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: (updatedItems[existingItemIndex].quantity || 1) + 1,
        }
        return updatedItems
      }
      // Add new product with initial quantity
      return [...prevItems, { ...product, quantity: 1 }]
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
        quantity,
        setQuantity,
        updateCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
