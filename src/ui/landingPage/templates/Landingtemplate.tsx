import { Outlet } from 'react-router-dom'
import Banner from '../organsims/Banner'
import Footer from '../organsims/Footer'
import Navbar from '../organsims/Navbar'

const Landingtemplate = () => {
  return (
    <div className='flex flex-col'>
      <div className='z-10'>
        <Banner />
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Landingtemplate
