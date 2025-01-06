import Button from '@ui/landingPage/atoms/Button'
import Paragraph from '@ui/landingPage/atoms/Paragraph'
import CartContent from '@ui/landingPage/molecules/CartContent'
import { ChevronLeft } from 'lucide-react'

const Cart = ({ cartOpen, toggleCartOpen }: { cartOpen: boolean; toggleCartOpen: () => void }) => {
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
        className={`fixed top-0 right-0 h-screen w-[300px] bg-white transition-transform duration-300 ease-in-out transform ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='p-5 flex gap-24 bg-[#5d6956] text-white'>
          <button onClick={toggleCartOpen}>
            <ChevronLeft color='#ffffff' strokeWidth={0.5} />
          </button>
          <h1 className='text-2xl font-extrabold tracking-widest'>Cart</h1>
        </div>
        <p className='text-xl text-center pt-8 pb-5 font-extrabold border-custom border-r-0 border-b-[#ad6343] border-l-0 '>
          Your products
        </p>
        <div className='h-[50%] overflow-y-scroll'>
          <CartContent />
        </div>

        {/* checkout */}
        <div className='fixed bottom-0 mx-5 '>
          <div className='text-sm  mt-8 '>
            <Paragraph value='Subtotal' />

            <span className='text-custom'>$190.00</span>
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
