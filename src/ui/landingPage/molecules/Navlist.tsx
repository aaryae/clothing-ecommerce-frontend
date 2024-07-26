import Navitem from '../atoms/Navitem'

const Navlist = ({ responsiveState }: { responsiveState: boolean }) => {
  return (
    <>
      <ul className='hidden md:flex text-sm m-auto '>
        <Navitem value='Home' />
        <Navitem value='Women' />
        <Navitem value='Men' />
        <Navitem value='Shop All' />
        <Navitem value='About' />
      </ul>
      {responsiveState && (
        <div className=' bg-black block md:hidden  text-white h-[100vh] w-[40vh]'>
          <ul className=' text-sm m-auto'>
            <Navitem value='Home' />
            <Navitem value='Women' />
            <Navitem value='Men' />
            <Navitem value='Shop All' />
            <Navitem value='About' />
          </ul>
        </div>
      )}
    </>
  )
}

export default Navlist
