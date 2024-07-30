import { image } from '@config/constant/image'
import Button from '../atoms/Button'
import HeadingSecondary from '../atoms/HeadingSecondary'
import Paragraph from '../atoms/Paragraph'

const SectionAbout = () => {
  return (
    <div className=' relative w-full custom-grid'>
      <div className=' mx-auto w-fit my-12 custom-grid-1 justify-center content-center bg-white/20 shadow-lg backdrop-blur-lg border border-white/30 p-10'>
        <div className='md:w-[350px]  z-30 flex gap-5 flex-col justifyw-center items-center '>
          <HeadingSecondary value='Ethically Made' />
          <Paragraph
            value={`I'm a paragraph. Click here to add your own text and edit me.I’m a great place for you to tell a story and let your users know a little more about you. <br/> I'm a paragraph. Click here to add your own text and edit me.I’m a great place for you to tell a story and let your users know a little more about you.`}
          />

          <Button value='Learn More' />
        </div>
      </div>
      <img className='hidden md:block z-20 custom-grid-2 ' src={image.flower} alt='flower' />
      <img className='hidden md:block z-10 custom-grid-3' src={image.herowhite} alt='white' />
    </div>
  )
}

export default SectionAbout
