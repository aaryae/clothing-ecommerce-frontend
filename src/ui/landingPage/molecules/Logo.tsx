import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/'>
      <h1 className='text-4xl font-secondary font-thin tracking-custom mt-[2px] pointer'>
        <span className='underline text-4xl font-secondary font-thin tracking-custom mt-[2px]'>A</span>
        <span className='text-[#563a3d] text-4xl font-secondary font-thin tracking-custom mt-[2px]'>ARYA</span>
      </h1>
    </Link>
  )
}

export default Logo;
