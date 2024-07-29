import { Outlet } from 'react-router-dom'
import Banner from '../organsims/Banner'
import Navbar from '../organsims/Navbar'
import Footer from '../organsims/Footer'

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
