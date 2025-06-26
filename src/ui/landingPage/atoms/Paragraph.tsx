const Paragraph = ({ value }: { value: string }) => {
  return <p className='text-custom font-semibold  tracking-widest  ' dangerouslySetInnerHTML={{ __html: value }} />
}

export default Paragraph
