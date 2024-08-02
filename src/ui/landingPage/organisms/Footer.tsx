import HeadingSecondary from '../atoms/HeadingSecondary'
import NavItem from '../atoms/NavItem'

const Footer = () => {
  return (
    <div className='flex bg-[#fcf6f2] p-4 mt-10'>
      <div className='w-1/5 text-center'>
        <HeadingSecondary value='Customer Care' />
        <br />
        <NavItem value='FAQ' route={''} />
        <NavItem value='Shipping & Returns' route={''} />
        <NavItem value='Store Policy' route={''} />
      </div>
      <div className='w-1/5 text-center'>
        <HeadingSecondary value='Follow Us' />
        <br />
        <NavItem value='Instagram' route={''} />
        <NavItem value='Twitter' route={''} />
        <NavItem value='Facebook' route={''} />
        <NavItem value='Contact' route={''} />
      </div>
      <div className='w-1/5 text-center'>
        <HeadingSecondary value='The Company' />
        <br />
        <NavItem value='About' route={''} />
        <NavItem value='Sustainability' route={''} />
        <NavItem value='Accessibility' route={''} />
        <NavItem value='Store Locator' route={''} />
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
