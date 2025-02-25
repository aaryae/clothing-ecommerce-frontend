import { CartContext } from 'context/cartContext'
import { useContext } from 'react'
import Paragraph from '../atoms/Paragraph'

const CartContent = () => {
  const { cartItems, updateCartQuantity } = useContext(CartContext) || { cartItems: [], updateCartQuantity: () => {} }

  return (
    <>
      {cartItems.map((item, index) => (
        <div key={index}>
          <div className='flex gap-4 mt-4 mx-5'>
            {/* Image */}
            <img className='h-[80px] p-1' src={item.image} alt={item.productHeading} height={100} />

            {/* Content */}
            <div className='p-1 w-full'>
              <Paragraph value={item.productHeading} />
              <span className='text-sm'>${item.price.toFixed(2)}</span>
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
                    updateCartQuantity(item.id, newQuantity)
                  }}
                />

                <span className='text-sm my-auto'>${(item.quantity || 1) * parseFloat(item.price.toFixed(2))}</span>
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
