import useToggle from '@hooks/useToggle'
import { AlignLeft, ShoppingBag, X } from 'lucide-react'
import Navitem from '../atoms/Navitem'
import Logo from '../molecules/Logo'
import Navlist from '../molecules/Navlist'

const Navbar = () => {
  const [menuOpen, toggleMenuOpen] = useToggle(false)

  return (
    <>
      {/* navmenu */}
      <nav className='flex justify-between py-2 px-7 w-full fixed bg-white mt-[26px]'>
        <Logo />
        <div className='flex gap-20 justify-between'>
          <Navlist />
          <div className='hidden md:flex gap-4 m-auto'>
            <p className='m-auto'>Log In</p>
            <ShoppingBag strokeWidth={0.5} />
          </div>
          <div onClick={() => toggleMenuOpen()} className='flex md:hidden cursor-pointer'>
            <AlignLeft strokeWidth={0.5} />
          </div>
        </div>
      </nav>
      {/* Overlay : background blur when sidebar is open  */}
      <div
        className={`md:hidden  block fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => toggleMenuOpen()}
      ></div>

      {/* Sidebar Menu */}
      <div
        className={`fixed md:hidden top-0 right-0 h-screen w-1/2 bg-[#ede5df] transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div onClick={() => toggleMenuOpen()} className='absolute top-0 right-0 p-5 cursor-pointer'>
          <X color='#870003' strokeWidth={0.5} />
        </div>
        <ul className='text-sm flex flex-col justify-center text-center m-auto h-full gap-5'>
          <Navitem value='Home' />
          <Navitem value='Women' />
          <Navitem value='Men' />
          <Navitem value='Shop All' />
          <Navitem value='About' />
        </ul>
      </div>
    </>
  )
}

export default Navbar
