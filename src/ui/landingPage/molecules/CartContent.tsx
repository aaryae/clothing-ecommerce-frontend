import { image } from '@config/constant/image'
import Paragraph from '@ui/landingPage/atoms/Paragraph'

const CartContent = () => {
  return (
    <div className='flex gap-4 py-9 mt-4 mx-5 '>
      {/* image */}
      <img className='h-[80px] p-1 ' src={image.menproduct1} alt='' height={100} />

      {/* content */}
      <div className='p-1'>
        <Paragraph value='This is Heading' />
        <span className='text-custom font-extrabold'>$20.00</span>
        <br />
        <input
          className='border-custom outline-none m-1 w-[50px] text-center'
          type='number'
          pattern='[0-9]*'
          max='99999'
          min='1'
          defaultValue='1'
        />
      </div>
    </div>
  )
}

export default CartContent
