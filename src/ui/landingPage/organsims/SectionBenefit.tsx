import { image } from '@config/constant/image'
import ContentCard from '../molecules/ContentCard'

const SectionBenefit = () => {
  return (
    <div className='relative bg-cover bg-center mt-24' style={{ backgroundImage: `url(${image.sectionplate})` }}>
      <div className='w-fit mx-auto my-10 p-1 '>
        <ContentCard
          headingValue='Carefully crafted for people that care'
          paragraphValue={`I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.`}
          buttonValue='See More'
        />
      </div>
    </div>
  )
}

export default SectionBenefit
