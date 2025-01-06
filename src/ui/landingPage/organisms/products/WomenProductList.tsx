import { womenProductData } from '@data/productData/product.data'
import useProductModal from '@hooks/useProductModel'
import useScreenSize from '@hooks/useScreenSize'
import { productCardInterface } from '@interface/product.interface'
import ProductCard from '@ui/landingPage/molecules/ProductCard'
import Loading from 'Loading'
import { lazy, Suspense } from 'react'

const ProductModal = lazy(() => import('@ui/landingPage/organisms/modal/ProductModal'))

const WomenProductList = () => {
  const { isModalOpen, selectedProduct, openModal, closeModal } = useProductModal()
  const isMdOrLarger = useScreenSize()

  const handleProductClick = (product: productCardInterface) => {
    if (isMdOrLarger) {
      openModal(product)
    } else {
      handleProductDetail(product)
    }
  }

  const handleProductDetail = (product: productCardInterface) => {
    window.location.href = `/products/${product.id}`
  }
  return (
    <div className='flex flex-wrap mt-11'>
      {isModalOpen && selectedProduct && isMdOrLarger && (
        <Suspense fallback={<Loading />}>
          <ProductModal {...selectedProduct} onClose={closeModal} />
        </Suspense>
      )}
      {womenProductData.map((product, index) => (
        <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
          <ProductCard
            {...product}
            productModal={() => {
              handleProductClick(product)
            }}
            productDetail={() => {
              handleProductDetail(product)
            }}
          />{' '}
        </div>
      ))}
    </div>
  )
}

export default WomenProductList
