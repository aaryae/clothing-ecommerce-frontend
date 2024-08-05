import Banner from '@ui/landingPage/organisms/Banner'
import Footer from '@ui/landingPage/organisms/Footer'
import Navbar from '@ui/landingPage/organisms/Navbar'
import { Outlet } from 'react-router-dom'

const LandingTemplate = () => {
  return (
    <div className='flex flex-col justify-between h-screen '>
      <div className='z-50'>
        <Banner />
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default LandingTemplate
