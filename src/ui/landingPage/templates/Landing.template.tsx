import { Outlet } from 'react-router-dom'
import Banner from '../organisms/Banner'
import Footer from '../organisms/Footer'
import Navbar from '../organisms/Navbar'

const LandingTemplate = () => {
  return (
    <div className='flex flex-col'>
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
