const Paragraph = ({ value }: { value: string }) => {
  return (
    <p
      className='text-custom font-semibold  tracking-widest text-justify'
      dangerouslySetInnerHTML={{ __html: value }}
    />
  )
}

export default Paragraph
