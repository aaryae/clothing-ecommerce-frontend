import { MenProductData, womenProductData } from '@data/productData/product.data'
import { CartContext } from 'context/cartContext'
import { CircleChevronLeft } from 'lucide-react'
import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link, useNavigate, useParams } from 'react-router-dom'
import HeadingSecondary from '../atoms/HeadingSecondary'
import ProductInfo from '../molecules/ProductInfo'

const ProductDetails = () => {
  const { productId } = useParams()
  const { addToCart, selectedProduct, setSelectedProduct } = useContext(CartContext) || {}
  const navigate = useNavigate()
  const [quantityNumber, setQuantityNumber] = useState<number>(1)

  const product = MenProductData.concat(womenProductData).find((product) => product.id.toString() === productId)

  useEffect(() => {
    if (!product && !selectedProduct) {
      toast.error('Product not found!')
    }
  }, [product, selectedProduct])

  const handleProductCart = () => {
    if (product && addToCart && setSelectedProduct) {
      addToCart(product, quantityNumber)
      setSelectedProduct(product)
      toast.success('Product added to cart')
    } else {
      toast.error('Unable to add product to cart')
    }
  }

  const handlePrevClick = () => {
    navigate(-1)
  }

  const displayProduct = product || selectedProduct

  return (
    <div className='my-32 max-w-3xl mx-auto flex gap-8 flex-wrap md:flex-nowrap lg:flex-nowrap justify-center'>
      <span onClick={handlePrevClick} className='flex gap-2 cursor-pointer tracking-widest hover:underline'>
        <CircleChevronLeft /> prev
      </span>
      {displayProduct ? (
        <>
          <img src={displayProduct.image} alt='productimg' width={400} />

          <div className='px-4 flex flex-col'>
            <div>
              <HeadingSecondary value={displayProduct.productHeading} />
              <p className='text-sm mt-5 tracking-wider text-[#ad6343] font-bold'>${displayProduct.price.toFixed(2)}</p>
            </div>
            <div>
              <label htmlFor='quantity' className='tracking-wider'>
                Quantity
              </label>
              <br />
              <input
                className='border-custom outline-none  w-[50px] text-center'
                type='number'
                pattern='[0-9]*'
                max='99999'
                min='1'
                value={quantityNumber}
                onChange={(event) => setQuantityNumber(Number(event.target.value))}
              />
            </div>
            <button
              className='border-custom p-1 py-2 my-1 mt-3 border-[#ad6343] text-[#ad6343] tracking-wide text-custom font-extrabold'
              type='button'
              onClick={handleProductCart}
            >
              Add to Cart
            </button>

            <button
              className='border-custom p-1 py-2 my-1 border-[#5d6956] bg-[#5d6956] text-white hover:bg-[#505f47] tracking-wide text-custom font-bold'
              type='submit'
            >
              <Link to='/checkout'>Buy Now</Link>
            </button>

            <ProductInfo />
          </div>
        </>
      ) : (
        <p>No Product Available</p>
      )}
    </div>
  )
}

export default ProductDetails
