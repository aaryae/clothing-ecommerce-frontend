import { productCardInterface } from '@interface/product.interface'
import { useState } from 'react'

const useProductModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [selectedProduct, setSelectedProduct] = useState<productCardInterface | null>(null)

  const openModal = (product: productCardInterface) => {
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
