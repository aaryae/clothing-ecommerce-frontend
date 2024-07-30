import Heading from '../atoms/Heading'
import AllProductList from '../organisms/AllProductList'

const AllProduct = () => {
  return (
    <div className='mt-24 px-5'>
      <Heading value="Women's Collection" />
      <AllProductList />
    </div>
  )
}

export default AllProduct
