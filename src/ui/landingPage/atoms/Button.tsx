const Button = ({ value }: { value: string }) => {
  return (
    <button className='bg-[#ad6343] px-[26px] py-[6px] m-3 text-white text-custom font-semibold tracking-wider hover:bg-[#737667]'>
      {value}
    </button>
  )
}

export default Button

