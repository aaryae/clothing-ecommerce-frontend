import HeadingSecondary from '../atoms/HeadingSecondary'
import NavItem from '../atoms/NavItem'

const Footer = () => {
  return (
    <div className='flex bg-[#fcf6f2] p-4'>
      <div className='w-1/5 text-center'>
        <HeadingSecondary value='Customer Care' />
        <br />
        <NavItem value='FAQ' />
        <NavItem value='Shipping & Returns' />
        <NavItem value='Store Policy' />
      </div>
      <div className='w-1/5 text-center'>
        <HeadingSecondary value='Follow Us' />
        <br />
        <NavItem value='Instagram' />
        <NavItem value='Twitter' />
        <NavItem value='Facebook' />
        <NavItem value='Contact' />
      </div>
      <div className='w-1/5 text-center'>
        <HeadingSecondary value='The Company' />
        <br />
        <NavItem value='About' />
        <NavItem value='Sustainability' />
        <NavItem value='Accessibility' />
        <NavItem value='Store Locator' />
      </div>
      <div className='w-2/5 text-center'>
        <br />
        <HeadingSecondary value='Sign up for special offers' />
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
