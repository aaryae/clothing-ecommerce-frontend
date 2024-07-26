import Navitem from '../atoms/Navitem'

const Navlist = () => {
  return (
    <>
      <ul className='hidden md:flex text-sm m-auto '>
        <Navitem value='Home' />
        <Navitem value='Women' />
        <Navitem value='Men' />
        <Navitem value='Shop All' />
        <Navitem value='About' />
      </ul>
    </>
  )
}

export default Navlist
