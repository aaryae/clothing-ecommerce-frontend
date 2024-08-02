import Heading from '../atoms/Heading'
import AllProductList from '../organisms/products/AllProductList'

const AllProduct = () => {
  return (
    <div className='mt-24 px-5'>
      <Heading value='All Collection' />
      <AllProductList />
    </div>
  )
}

export default AllProduct
