import Heading from '../atoms/Heading'
import MenProductList from '../organisms/products/MenProductList'

const MenProduct = () => {
  return (
    <>
      <div className='mt-24 px-5'>
        <Heading value="Men's Collection" />
        <MenProductList />
      </div>
    </>
  )
}

export default MenProduct
