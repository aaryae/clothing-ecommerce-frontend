const Paragraph = ({ value }: { value: string }) => {
  return (
    <p className='text-custom font-medium tracking-wider text-justify' dangerouslySetInnerHTML={{ __html: value }} />
  )
}

export default Paragraph
