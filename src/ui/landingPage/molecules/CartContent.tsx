import { CartContext } from 'context/cartContext'
import { Trash } from 'lucide-react'
import { useContext } from 'react'
import { toast } from 'react-hot-toast'
import Paragraph from '../atoms/Paragraph'

const CartContent = () => {
  const { cartItems, updateCartQuantity, removeFromCart } = useContext(CartContext) || {
    cartItems: [],
    updateCartQuantity: () => {},
    removeFromCart: () => {},
  }

  const handleRemove = (id: string) => {
    removeFromCart(id)
    toast.success('Removed from cart')
  }

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) {
      toast.error('Quantity must be at least 1')
      return
    }
    updateCartQuantity(id, quantity)
    toast.success('Quantity updated')
  }

  return (
    <>
      {cartItems.map((item, index) => (
        <div key={index} className='bg-transparent'>
          <div className='flex gap-4 mt-4 mx-5'>
            {/* Image */}
            <img className='h-[80px] p-1' src={item.image} alt={item.productHeading} height={100} />

            {/* Content */}
            <div className='p-1 w-full'>
              <div className='flex justify-between w-full'>
                <Paragraph value={item.productHeading} />
                <div className='hover:text-red-700'>
                  <Trash size={20} className='cursor-pointer' onClick={() => handleRemove(item.id)} />
                </div>
              </div>
              <span className='text-sm tracking-wide'>${item.price.toFixed(2)}</span>
              <br />

              <div className='flex w-full justify-between'>
                {/* Quantity Input */}
                <input
                  className='border-custom outline-none m-1 w-[50px] text-center'
                  type='number'
                  pattern='[0-9]*'
                  max='99999'
                  min='1'
                  value={item.quantity}
                  onChange={(event) => {
                    const newQuantity = Number(event.target.value)
                    handleQuantityChange(item.id, newQuantity)
                  }}
                />

                <span className='text-sm tracking-wide my-auto'>
                  ${(item.quantity || 1) * parseFloat(item.price.toFixed(2))}
                </span>
              </div>
            </div>
          </div>
          <hr className='mx-5' />
        </div>
      ))}
    </>
  )
}

export default CartContent
