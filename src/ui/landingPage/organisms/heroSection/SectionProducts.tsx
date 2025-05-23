import { image } from '@config/constant/image'
import Heading from '@ui/landingPage/atoms/Heading'
import ParagraphSecondary from '@ui/landingPage/atoms/ParagraphSecondary'

const SectionProducts = () => {
  return (
    <>
      <Heading value='Explore Our Latest' />
      <div className='flex flex-wrap md:justify-center max-w-[97%]  justify-between mx-auto pt-14'>
        <div className='relative group cursor-pointer p-1'>
          <div className='relative'>
            <img src={image.newarrivals ?? image.fallback} alt='arrival-1' />
            <p className='absolute bottom-0 left-0 right-0 bg-[#ad6343]  text-white opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center'>
              Quick View
            </p>
          </div>
          <ParagraphSecondary value='Organic Linen Maxi Dress' />
        </div>
        <div className='relative group cursor-pointer p-1'>
          <div className='relative'>
            <img src={image.newarrivals2 ?? image.fallback} alt='arrival-2' />
            <p className='absolute bottom-0 left-0 right-0 bg-[#ad6343]  text-white opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center'>
              Quick View
            </p>
          </div>
          <ParagraphSecondary value='Essential Cotton Blazzer' />
        </div>
        <div className='relative group cursor-pointer p-1'>
          {' '}
          <div className='relative'>
            <img src={image.newarrivals3 ?? image.fallback} alt='arrival-3' />
            <p className='absolute bottom-0 left-0 right-0 bg-[#ad6343]  text-white opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center'>
              Quick View
            </p>
          </div>
          <ParagraphSecondary value='Cotton Squareneck Cami' />
        </div>
      </div>
    </>
  )
}

export default SectionProducts
