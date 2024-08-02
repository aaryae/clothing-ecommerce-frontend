import { MenProductData, womenProductData } from '@data/productData/product.data'
import useProductModal from '@hooks/useProductModel'
import ProductCard from '@ui/landingPage/molecules/ProductCard'
import ProductModal from '../modal/ProductModal'

const AllProductList = () => {
  const { isModalOpen, selectedProduct, openModal, closeModal } = useProductModal()

  return (
    <div className='flex flex-wrap mt-11 '>
      {isModalOpen && selectedProduct && (
        <ProductModal
          productName={selectedProduct.productHeading}
          productImage={selectedProduct.image}
          onClose={closeModal}
        />
      )}

      {MenProductData.concat(womenProductData).map((product, index) => (
        <div key={index} className='w-full sm:w-1/2 lg:w-1/4 p-2'>
          <ProductCard {...product} onClick={() => openModal(product)} />
        </div>
      ))}
    </div>
  )
}

export default AllProductList
