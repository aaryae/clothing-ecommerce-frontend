import Button from '../atoms/Button'
import HeadingSecondary from '../atoms/HeadingSecondary'
import Paragraph from '../atoms/Paragraph'

const ContentCard = ({
  headingValue,
  paragraphValue,
  buttonValue,
}: {
  headingValue: string
  paragraphValue: string
  buttonValue: string
}) => {
  return (
    <div className='p-9 m-2 text-center bg-white/20 shadow-lg backdrop-blur-lg border border-white/30'>
      <HeadingSecondary value={headingValue} />
      <br />
     
      <br />
      <Button value={buttonValue} />
    </div>
  )
}

export default ContentCard
