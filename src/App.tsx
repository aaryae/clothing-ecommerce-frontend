import { image } from '@config/constant/image'
import Heading from '@ui/user/atoms/Heading'

function App() {
  return (
    <>
      <div className='p-10 m-10'>
        <Heading
          value='
Sustainable. Beautiful. Ethical.'
        />
        <img src={image.frontmen} alt='' />
      </div>
    </>
  )
}

export default App
