import NavItem from '../atoms/NavItem'

const NavList = () => {
  return (
    <>
      <ul className='hidden md:flex text-sm m-auto '>
        <NavItem value='Home' />
        <NavItem value='Women' />
        <NavItem value='Men' />
        <NavItem value='Shop All' />
        <NavItem value='About' />
      </ul>
    </>
  )
}

export default NavList
