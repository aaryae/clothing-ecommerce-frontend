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
    <div className='p-9 m-2 text-center custom-glass'>
      <HeadingSecondary value={headingValue} />
      <br />
      <Paragraph value={paragraphValue} />
      <br />
      <Button value={buttonValue} />
    </div>
  )
}

export default ContentCard
