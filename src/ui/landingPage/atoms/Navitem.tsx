const Navitem = ({ value }: { value: string }) => {
  return (
    <>
      <li className='px-3 '>
        <a href='#'>{value}</a>
      </li>
    </>
  )
}

export default Navitem
