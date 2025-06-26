import Button from '@ui/landingPage/atoms/Button'
import Paragraph from '@ui/landingPage/atoms/Paragraph'
import CartContent from '@ui/landingPage/molecules/CartContent'
import { CartContext } from 'context/cartContext'
import { ChevronLeft } from 'lucide-react'
import { useContext, useMemo } from 'react'

const Cart = ({ cartOpen, toggleCartOpen }: { cartOpen: boolean; toggleCartOpen: () => void }) => {
  const { cartItems } = useContext(CartContext) || { cartItems: [] }

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }, [cartItems])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          cartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleCartOpen}
      ></div>

      {/* Cart */}
      <div
        className={`fixed top-0 right-0 h-screen w-[400px] bg-[#ffffffd2] transition-transform duration-300 ease-in-out transform ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='p-5 flex gap-24 bg-[#5d6956] text-white'>
          <button onClick={toggleCartOpen}>
            <ChevronLeft color='#ffffff' strokeWidth={0.5} />
          </button>
          <h1 className='text-2xl font-extrabold tracking-widest'>Cart</h1>
        </div>

        <p className='text-xl text-center mx-5 pt-8 pb-5 font-extrabold border-custom border-r-0 border-b-[#ad6343] border-l-0 '>
          Your products
        </p>

        {/* Cart Items */}
        <div className='h-[50%] overflow-y-scroll'>
          <CartContent />
        </div>

        {/* Checkout Section */}
        <div className='fixed bottom-0 bg-[#ffffffd2]  w-[400px] px-5'>
          <div className='text-sm mt-8 flex justify-between items-center border-t border-[#ccc] pt-4 bg-transparent'>
            <Paragraph value='Subtotal' />
            <span className='text-custom font-bold'>${subtotal.toFixed(2)}</span>
          </div>
          <div className='py-8 flex justify-center items-center'>
            <Button value='View Cart' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
