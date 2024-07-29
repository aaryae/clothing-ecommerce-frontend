import { image } from '@config/constant/image'
import Heading from '../atoms/Heading'
import HeadingSecondary from '../atoms/HeadingSecondary'

const SectionProducts = () => {
  return (
    <>
      <Heading value='Explore Our Latest' />
      <div className='flex flex-wrap md:justify-center max-w-[97%]  justify-between mx-auto pt-14'>
        <div className='relative group cursor-pointer p-1'>
          <div className='relative'>
            <img src={image.newarrivals} alt='arrival-1' />
            <p className='absolute bottom-0 left-0 right-0 bg-[#ad6343]  text-white opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center'>
              Quick View
            </p>
          </div>
          <HeadingSecondary value='Organic Linen Maxi Dress' />
        </div>
        <div className='relative group cursor-pointer p-1'>
          <div className='relative'>
            <img src={image.newarrivals2} alt='arrival-2' />
            <p className='absolute bottom-0 left-0 right-0 bg-[#ad6343]  text-white opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center'>
              Quick View
            </p>
          </div>
          <HeadingSecondary value='Essential Cotton Blazzer' />
        </div>
        <div className='relative group cursor-pointer p-1'>
          {' '}
          <div className='relative'>
            <img src={image.newarrivals3} alt='arrival-3' />
            <p className='absolute bottom-0 left-0 right-0 bg-[#ad6343]  text-white opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center'>
              Quick View
            </p>
          </div>
          <HeadingSecondary value='Cotton Squareneck Cami' />
        </div>
      </div>
    </>
  )
}

export default SectionProducts
