import Headingsecondary from '../atoms/Headingsecondary'
import Navitem from '../atoms/Navitem'

const Footer = () => {
  return (
    <div className='flex bg-[#fcf6f2] p-4'>
      <div className='w-1/5 text-center'>
        <Headingsecondary value='Customer Care' />
        <br />
        <Navitem value='FAQ' />
        <Navitem value='Shipping & Returns' />
        <Navitem value='Store Policy' />
      </div>
      <div className='w-1/5 text-center'>
        <Headingsecondary value='Follow Us' />
        <br />
        <Navitem value='Instagram' />
        <Navitem value='Twitter' />
        <Navitem value='Facebook' />
        <Navitem value='Contact' />
      </div>
      <div className='w-1/5 text-center'>
        <Headingsecondary value='The Company' />
        <br />
        <Navitem value='About' />
        <Navitem value='Sustainability' />
        <Navitem value='Accessibility' />
        <Navitem value='Store Locator' />
      </div>
      <div className='w-2/5 text-center'>
        <br />
        <Headingsecondary value='Sign up for special offers' />
        <label htmlFor='email' className='block mt-2'>
          Email
        </label>
        <input type='email' id='email' className='block w-full mt-1 p-2 border' />
        <button className='mt-2 p-2 bg-black text-white'>Submit</button>
      </div>
    </div>
  )
}

export default Footer
