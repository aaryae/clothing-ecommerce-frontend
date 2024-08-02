import { MenProductData } from '@data/productData/product.data'
import useProductModal from '@hooks/useProductModel'
import useScreenSize from '@hooks/useScreenSize'
import ProductCard from '@ui/landingPage/molecules/ProductCard'
import Loading from 'Loading'
import { lazy, Suspense } from 'react'

const ProductModal = lazy(() => import('@ui/landingPage/organisms/modal/ProductModal'))
const MenProductList = () => {
  const { isModalOpen, selectedProduct, openModal, closeModal } = useProductModal()
  const isMdOrLarger = useScreenSize()

  return (
    <div className='flex flex-wrap mt-11'>
      {isModalOpen && selectedProduct && isMdOrLarger && (
        <Suspense fallback={<Loading />}>
          <ProductModal {...selectedProduct} onClose={closeModal} />
        </Suspense>
      )}

      {MenProductData.map((product, index) => (
        <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
          <ProductCard {...product} onClick={() => openModal(product)} />
        </div>
      ))}
    </div>
  )
}

export default MenProductList
