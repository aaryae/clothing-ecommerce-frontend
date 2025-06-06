import { image } from '@config/constant/image'
import Button from  '@ui/landingPage/atoms/Button'
import HeadingSecondary from '@ui/landingPage/atoms/HeadingSecondary'
import Paragraph from '@ui/landingPage/atoms/Paragraph'



const SectionBenefit = () => {
  return (
    <div
      className='relative bg-cover bg-center mt-24'
      style={{
        backgroundImage: `url(${image.sectionplate ?? image.fallback} )`,
      }}
    >
      <div className='md:w-[500px] mx-2 md:mx-auto p-7 my-28 text-center bg-white/20 shadow-lg backdrop-blur-lg border border-white/30 flex justify-center items-center gap-10 flex-col '>
        <HeadingSecondary value='Carefully crafted for people that care' />
        <Paragraph
          value={`I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.`}
        />
        <Button value='See More' />
      </div>
    </div>
  )
}

export default SectionBenefit
