import { image } from '@config/constant/image'
import ContentCard from '../molecules/ContentCard'

const SectionAbout = () => {
  return (
    <div className=' relative w-full custom-grid '>
      <div className=' mx-auto w-fit mt-12 custom-grid-1'>
        <div className='w-[350px]  z-30  '>
          <ContentCard
            headingValue='
        Ethically Made'
            paragraphValue={`I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.`}
            buttonValue='Learn More'
          />
        </div>
      </div>
      <img className='z-20 custom-grid-2 ' src={image.flower} alt='flower' />
      <img className='  z-10 custom-grid-3' src={image.herowhite} alt='white' />
    </div>
  )
}

export default SectionAbout
