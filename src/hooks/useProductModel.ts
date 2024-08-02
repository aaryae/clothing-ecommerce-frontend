import { ProductCardInterface } from '@interface/product.interface'
import { useState } from 'react'

const useProductModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [selectedProduct, setSelectedProduct] = useState<ProductCardInterface | null>(null)

  const openModal = (product: ProductCardInterface) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return {
    isModalOpen,
    selectedProduct,
    openModal,
    closeModal,
  }
}

export default useProductModal
