import { image } from '@config/constant/image'
import { outStory } from '@data/ourStory/story.data'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'
import ParagraphSecondary from '../atoms/ParagraphSecondary'

const AboutSection = () => {
  return (
    <div className='mt-20 flex flex-col items-center  max-w-5xl mx-auto p-6 ' >
      <Heading value='Our Story' />
      <br />
      <br />
      <br />
      <Paragraph value={outStory[0]} />
      <br />
      <br />
      <div className='flex flex-wrap max-w-5xl mx-auto '>
        <div className=' w-fit flex  items-center gap-7 '>
          <img src={image.aboutimage1 ?? image.fallback} alt='aboutimage1' width={300} />
          <div>
            <Heading value='Sustainability' />
            <hr />
            <ParagraphSecondary value='From our farms, to our manufacturing and packaging' />
            <Paragraph
              value={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.`}
            />
          </div>
        </div>
        <div className=' w-fit flex  items-center gap-7 p-5'>
          <div className='float-right'>
            <Heading value='Our Factories' />
            <hr />
            <ParagraphSecondary
              value='We respect people as much as we respect the planet. 
            '
            />
            <Paragraph
              value={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.`}
            />
          </div>
          <img src={image.aboutimage2 ?? image.fallback} alt='aboutimage2' width={300} />
        </div>
        <div className=' w-fit flex  items-center gap-7 p-5'>
          <img src={image.aboutimage3 ?? image.fallback} alt='aboutimage3' width={300} />
          <div>
            <Heading value='Our Fabrics' />
            <hr />
            <ParagraphSecondary value='Crafted from recycled and sustainably grown fibers.' />
            <Paragraph
              value={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
