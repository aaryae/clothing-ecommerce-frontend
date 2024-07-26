const Navitem = ({ value }: { value: string }) => {
  return (
    <>
      <li className='px-3 text-custom font-medium py-1 tracking-wider '>
        <a href='#'>{value}</a>
      </li>
    </>
  )
}

export default Navitem
