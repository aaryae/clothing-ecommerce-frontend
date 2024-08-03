import useToggle from '@hooks/useToggle'
import NavItem from '@ui/landingPage/atoms/NavItem'
import Logo from '@ui/landingPage/molecules/Logo'
import NavList from '@ui/landingPage/molecules/NavList'
import { AlignLeft, ShoppingBag, X } from 'lucide-react'
import Cart from './Cart'

const Navbar = () => {
  const [menuOpen, toggleMenuOpen] = useToggle(false)
  const [cartOpen, toggleCartOpen] = useToggle(false)

  return (
    <>
      {/* navmenu */}
      <nav className='flex justify-between py-2 px-7 w-full fixed bg-white mt-[26px]'>
        <Logo />
        <div className='flex gap-20 justify-between'>
          <NavList />
          <div className='hidden md:flex gap-4 m-auto'>
            <p className='m-auto text-sm cursor-pointer'>Log In</p>
            <div
              className='cursor-pointer'
              onClick={() => {
                toggleCartOpen()
              }}
            >
              <ShoppingBag strokeWidth={0.5} size={16} />
            </div>
          </div>
          <div onClick={() => toggleMenuOpen()} className='flex md:hidden cursor-pointer'>
            <AlignLeft strokeWidth={0.5} />
          </div>
        </div>
      </nav>
      {/* Overlay : background blur when sidebar is open  */}
      <div
        className={`md:hidden block fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => toggleMenuOpen()}
      ></div>

      {/* Sidebar Menu */}
      <div
        className={`fixed md:hidden top-0 right-0 h-screen w-1/2 bg-[#ede5df] transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div onClick={() => toggleMenuOpen()} className='absolute top-0 right-0 p-5 cursor-pointer'>
          <X color='#870003' strokeWidth={0.5} />
        </div>
        <ul className='text-sm flex flex-col justify-center text-center m-auto h-screen gap-5'>
          <NavItem value='Home' route='/' />
          <NavItem value='Women' route='womenproducts' />
          <NavItem value='Men' route='menproducts' />
          <NavItem value='Shop All' route='allproducts' />
          <NavItem value='About' route='about' />
        </ul>
      </div>

      {/* Cart Component */}
      <Cart cartOpen={cartOpen} toggleCartOpen={toggleCartOpen} />
    </>
  )
}

export default Navbar
