import Heading from '../atoms/Heading'
import WomenProductList from '../organisms/WomenProductList'

const WomenProduct = () => {
  return (
    <div className='mt-24 px-5'>
      <Heading value="Women's Collection" />
      <WomenProductList />
    </div>
  )
}

export default WomenProduct
