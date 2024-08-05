import Button from '@ui/landingPage/atoms/Button'
import Heading from '@ui/landingPage/atoms/Heading'
import { Link } from 'react-router-dom'

const SectionIntro = () => {
  return (
    <>
      <div className='w-full text-center pt-28 pb-12'>
        <Heading value='Sustainable. Beautiful. Ethical.' />
        <br />
        <Link to='/products'>
          <Button value='Shop Now' />
        </Link>
      </div>
    </>
  )
}

export default SectionIntro
