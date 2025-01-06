import { productCardInterface } from '@interface/product.interface'

const ProductCard = (props: productCardInterface) => {
  const {
    image,
    productHeading,
    price,
    discount = false,
    originalPrice,
    discountPrice,
    productState = false,
    productValue,
    productModal,
    productDetail,
  } = props

  return (
    <div className='group relative w-fit cursor-pointer'>
      <div className='relative'>
        <img onClick={productDetail} className='relative' src={image} alt='productimg' />
        <div
          onClick={productModal}
          className='absolute bottom-0 left-0 right-0 bg-[#ad6343] text-white opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center'
        >
          Quick View
        </div>
        {productState && (
          <span className='absolute top-0 bg-[#ad6343] text-white font-medium px-3 text-sm'>{productValue}</span>
        )}
      </div>
      <p className='font-semibold tracking-widest'>{productHeading}</p>
      <p className='text-sm tracking-wide text-[#ad6343] font-bold'>
        {discount && originalPrice !== undefined && discountPrice !== undefined ? (
          <>
            <span className='line-through mr-2'>${originalPrice}</span>${discountPrice}
          </>
        ) : (
          <span>${price}</span>
        )}
      </p>
    </div>
  )
}

export default ProductCard
