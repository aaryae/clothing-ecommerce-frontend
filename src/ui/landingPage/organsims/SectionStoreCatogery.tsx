import { image } from '@config/constant/image'
import { ChevronRight } from 'lucide-react'

const Sectionstorecategories = () => {
  return (
    <>
      <div className='flex cursor-pointer '>
        <div className='w-1/2 '>
          <div className=' overflow-hidden '>
            <img className='hover:scale-105  ' src={image?.frontmen} alt='imagewomen' />
          </div>
          <p className='flex justify-center items-center font-bold tracking-widest my-2 py-2 text-xl'>
            Shop Women
            <span>
              <ChevronRight strokeWidth={0.5} />
            </span>
          </p>
        </div>
        <div className='w-1/2  '>
          <div className='overflow-hidden '>
            <img className='hover:scale-105  ' src={image?.frontwomen} alt='imagemen' />
          </div>
          <p className='flex justify-center items-center font-bold tracking-widest my-2 py-2 text-xl'>
            Shop Men
            <span>
              <ChevronRight strokeWidth={0.5} />
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Sectionstorecategories
