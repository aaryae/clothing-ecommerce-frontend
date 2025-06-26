import { MenProductData, womenProductData } from '@data/productData/product.data'
import { productCardInterface } from '@interface/product.interface'
import HeadingSecondary from '@ui/landingPage/atoms/HeadingSecondary'
import { CartContext } from 'context/cartContext'
import { X } from 'lucide-react'
import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'

interface ProductModalProps extends productCardInterface {
  onClose: () => void
}

const ProductModal = ({ image, productHeading, onClose }: ProductModalProps) => {
  const { productId } = useParams()
  const { addToCart, setSelectedProduct } = useContext(CartContext) || {}

  const [quantity, setQuantity] = useState(1)

  const product = MenProductData.concat(womenProductData).find((product) => product.id.toString() === productId)

  const handleProductCart = () => {
    if (product && addToCart && setSelectedProduct) {
      addToCart(product, quantity)
      setSelectedProduct(product)
    }
  }

  return (
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50' onClick={onClose}>
      <div className='flex bg-white p-8 rounded '>
        <div className='w-[300px]'>
          <img src={image} alt='productImg' />
        </div>

        <div className='px-4 flex flex-col   relative  '>
          <div className='float-right cursor-pointer absolute -right-5 -top-5 hover:text-red-700  ' onClick={onClose}>
            <X size={20} />
          </div>

          <HeadingSecondary value={productHeading} />
          <p className='text-sm  tracking-wide text-[#ad6343] font-bold'>$20.00</p>

          <div className='py-2'>
            <label htmlFor='quantity'>Quantity</label>
            <br />
            <input
              id='quantity'
              className='border-custom outline-none m-1 w-[50px] text-center'
              type='number'
              max='99999'
              min='1'
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            />
          </div>
          <button
            className='border-custom p-1 my-1 border-[#ad6343] text-[#ad6343] tracking-wide text-sm font-extrabold'
            onClick={handleProductCart}
          >
            Add to Cart
          </button>
          <button
            className='border-custom p-1 my-1 border-[#5d6956] bg-[#5d6956] text-white hover:bg-[#505f47] tracking-wide text-sm font-bold'
            type='submit'
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
