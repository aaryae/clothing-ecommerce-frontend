import { CartContext } from 'context/cartContext'
import { Lock, Trash } from 'lucide-react'
import { useContext, useMemo } from 'react'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import Button from '../atoms/Button'
import HeadingSecondary from '../atoms/HeadingSecondary'
import Paragraph from '../atoms/Paragraph'

const Checkout = () => {
  const { cartItems, updateCartQuantity, removeFromCart } = useContext(CartContext) || {
    cartItems: [],
    updateCartQuantity: () => {},
    removeFromCart: () => {},
  }

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }, [cartItems])

  const handleRemove = (id: string) => {
    removeFromCart(id)
    toast.success('Item removed')
  }

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) {
      toast.error('Quantity must be at least 1')
      return
    }
    updateCartQuantity(id, quantity)
    toast.success('Quantity updated')
  }

  if (!cartItems.length) {
    return (
      <div className='text-center text-xl mt-6'>
        No products added to cart yet. <br />
        <Link to='/products'>
          <Button value='Let’s find one :)' />
        </Link>
      </div>
    )
  }

  const taxRate = 0.13 
  const taxAmount = subtotal * taxRate
  const total = subtotal + taxAmount

  return (
    <div className='max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10'>
      {/* Cart Items */}
      <div className='md:col-span-2'>
        <HeadingSecondary value='My Cart' />
        {cartItems.map((item, index) => (
          <div key={index} className='flex gap-4 border border-gray-200 p-3 my-4 rounded-lg shadow-sm bg-white'>
            <img className='h-20 w-20 object-cover rounded-md' src={item.image} alt={item.productHeading} />

            <div className='flex-1 flex flex-col justify-between'>
              <div className='flex justify-between items-start'>
                <Paragraph value={item.productHeading} />
                <Trash
                  size={18}
                  className='cursor-pointer text-red-600 hover:text-red-800'
                  onClick={() => handleRemove(item.id)}
                />
              </div>
              <span className='text-sm text-gray-600'>${item.price.toFixed(2)}</span>

              <div className='flex justify-between items-center mt-2'>
                <input
                  className='border border-gray-300 rounded px-2 py-1 w-16 text-center outline-none'
                  type='number'
                  min='1'
                  max='99999'
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                />
                <span className='text-sm font-semibold text-gray-800'>${(item.quantity * item.price).toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className='bg-white shadow-lg rounded-lg p-6'>
        <HeadingSecondary value='Order Summary' />
        <hr className='my-4' />

        {/* Subtotal */}
        <div className='flex justify-between text-sm'>
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        {/* Tax */}
        <div className='flex justify-between text-sm mt-2'>
          <span>Tax (13%)</span>
          <span>${taxAmount.toFixed(2)}</span>
        </div>

        <hr className='my-4' />

        {/* Total */}
        <div className='flex justify-between font-semibold text-lg'>
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button className='mt-6 w-full py-3 bg-[#ad6343] text-white font-semibold hover:bg-[#914e30] rounded'>
          Pay
        </button>

        <div className='flex justify-center items-center gap-2 mt-3 text-xs text-gray-500'>
          <Lock size={14} />
          Secure Payment with Khalti
        </div>
      </div>
    </div>
  )
}

export default Checkout
