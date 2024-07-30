import { image } from '@config/constant/image'
import Heading from '../atoms/Heading'
import ProductCard from '../organisms/ProductCard'

const WomenProduct = () => {
  return (
    <>
      <div className='mt-24 px-5'>
        <Heading value="Women's Collection" />
        <div className='flex flex-wrap mt-11 '>
          <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
            <ProductCard
              productHeading='women'
              price={20}
              image={image.womenproduct3 ?? image.fallback}
              discount={true}
              originalPrice={120}
              discountPrice={100}
              productState={true}
              productValue='best seller'
            />
          </div>

          <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
            <ProductCard
              productHeading='women'
              price={20}
              image={image.womenproduct2 ?? image.fallback}
              discount={true}
              originalPrice={120}
              discountPrice={100}
              productState={true}
              productValue='best seller'
            />
          </div>
          <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
            <ProductCard
              productHeading='women'
              price={20}
              image={image.womenproduct1 ?? image.fallback}
              discount={true}
              originalPrice={120}
              discountPrice={100}
              productState={true}
              productValue='best seller'
            />
          </div>

          <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
            <ProductCard
              productHeading='women'
              price={20}
              image={image.womenproduct5 ?? image.fallback}
              discount={true}
              originalPrice={120}
              discountPrice={100}
              productState={true}
              productValue='best seller'
            />
          </div>
          <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
            <ProductCard
              productHeading='women'
              price={20}
              image={image.womenproduct4 ?? image.fallback}
              discount={true}
              originalPrice={120}
              discountPrice={100}
              productState={true}
              productValue='best seller'
            />
          </div>
          <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
            <ProductCard
              productHeading='women'
              price={20}
              image={image.womenproduct6 ?? image.fallback}
              discount={true}
              originalPrice={120}
              discountPrice={100}
              productState={true}
              productValue='best seller'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default WomenProduct
