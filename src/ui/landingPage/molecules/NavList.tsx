import NavItem from '../atoms/NavItem'

const NavList = () => {
  return (
    <ul className='hidden md:flex text-sm m-auto'>
      <NavItem value='Home' route='/' />
      <NavItem value='Women' route='womenproducts' />
      <NavItem value='Men' route='menproducts' />
      <NavItem value='Shop All' route='products' />
      <NavItem value='About' route='about' />
    </ul>
  )
}

export default NavList
