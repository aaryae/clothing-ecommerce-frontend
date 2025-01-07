import { MenProductData, womenProductData } from '@data/productData/product.data'
import { useParams } from 'react-router-dom'
import HeadingSecondary from '../atoms/HeadingSecondary'
import ProductInfo from '../molecules/ProductInfo'

const ProductDetails = () => {
  const { productId } = useParams()
  const product = MenProductData.concat(womenProductData).find((product) => product.id.toString() === productId)

  return (
    <div className='my-32 max-w-3xl mx-auto flex  gap-8 flex-wrap md:flex-nowrap lg:flex-nowrap justify-center '>
      <img src={product?.image} alt='productimg' width={400} />

      <div className='px-4 flex flex-col '>
        <HeadingSecondary value={product?.productHeading} />
        <div>
          <p className='text-sm py-3 tracking-wider text-[#ad6343] font-bold'>- ${product?.price}</p>

          <label htmlFor='size' className='pr-3 tracking-wider'>
            Size
          </label>

          <select name='size' id='size' className=' p-2 bg-white border-custom tracking-wide outline-none'>
            <option className='p-2' value='small'>
              Small
            </option>
            <option className='p-2' value='medium'>
              Medium
            </option>
            <option className='p-2' value='large'>
              Large
            </option>
          </select>
        </div>
        <div className='py-2'>
          <label htmlFor='quantity' className='tracking-wider'>
            Quantity
          </label>

          <input
            className='border-custom outline-none m-1 w-[50px] text-center'
            type='number'
            pattern='[0-9]*'
            max='99999'
            min='1'
            defaultValue='1'
          />
        </div>
        <button
          className='border-custom p-1 py-2 my-1 border-[#ad6343] text-[#ad6343]  tracking-wide text-custom font-extrabold'
          type='submit'
        >
          Add to Cart
        </button>
        <button
          className='border-custom p-1 py-2 my-1 border-[#5d6956] bg-[#5d6956] text-white hover:bg-[#505f47] tracking-wide text-custom font-bold'
          type='submit'
        >
          Buy Now
        </button>
        <ProductInfo />
      </div>
    </div>
  )
}

export default ProductDetails
