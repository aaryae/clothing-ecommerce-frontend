import { image } from '@config/constant/image'
import ProductCard from '../molecules/ProductCard'

const MenProductList = () => {
  return (
    <div className='flex flex-wrap mt-11 '>
      <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
        <ProductCard productHeading='Relaxed Boyfriend Tee' price={20} image={image.menproduct1 ?? image.fallback} />
      </div>

      <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
        <ProductCard productHeading='Tusar Silk Kami' price={20} image={image.menproduct2 ?? image.fallback} />
      </div>
      <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
        <ProductCard
          productHeading='Classic Cotton Tee'
          price={20}
          image={image.menproduct3 ?? image.fallback}
          discount={true}
          originalPrice={120}
          discountPrice={100}
          productState={true}
          productValue='Sale'
        />
      </div>

      <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
        <ProductCard productHeading='Organic Linen Maxi Dress' price={20} image={image.menproduct6 ?? image.fallback} />
      </div>
      <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
        <ProductCard
          productHeading='Organic Cotton Belted Jacket'
          price={20}
          image={image.menproduct5 ?? image.fallback}
        />
      </div>
      <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
        <ProductCard
          productHeading='Linen A-Line Skirt'
          price={20}
          image={image.menproduct4 ?? image.fallback}
          productState={true}
          productValue='best seller'
        />
      </div>
    </div>
  )
}

export default MenProductList
