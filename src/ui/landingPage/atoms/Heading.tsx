const Heading = ({ value }: { value?: string }) => {
  return (
    <h1 className='md:text-4xl lg:text-4xl text-xl text-center font-poppins font-normal tracking-custom p-2'>
      {value}
    </h1>
  )
}

export default Heading
