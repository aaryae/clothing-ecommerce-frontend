import Heading from '../atoms/Heading'
import MenProductList from '../organisms/MenProductList'

const MenProduct = () => {
  return (
    <>
      <div className='mt-24 px-5'>
        <Heading value="Women's Collection" />
        <MenProductList />
      </div>
    </>
  )
}

export default MenProduct
