import { image } from '@config/constant/image'
import Heading from '@ui/landingPage/atoms/Heading'
import ParagraphSecondary from '@ui/landingPage/atoms/ParagraphSecondary'
import { useState } from 'react'
import ProductModal from '../modal/ProductModal'

const SectionProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<null | { image: string; productHeading: string; id: string }>(
    null
  )

  const handleQuickView = (image: string, productHeading: string, id: string) => {
    setSelectedProduct({ image, productHeading, id })
  }

  return (
    <>
      <Heading value='Explore Our Latest' />
      <div className='flex flex-wrap md:justify-center max-w-[97%]  justify-between mx-auto pt-14'>
        <div className='relative group cursor-pointer p-1'>
          <div className='relative' onClick={() => handleQuickView(image.newarrivals, 'Organic Linen Maxi Dress', '1')}>
            <img src={image.newarrivals ?? image.fallback} alt='arrival-1' />
            <p className='absolute bottom-0 left-0 right-0 bg-[#ad6343]  text-white opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center'>
              Quick View
            </p>
          </div>
          <ParagraphSecondary value='Organic Linen Maxi Dress' />
        </div>

        <div className='relative group cursor-pointer p-1'>
          <div
            className='relative'
            onClick={() => handleQuickView(image.newarrivals2, 'Essential Cotton Blazzer', '2')}
          >
            <img src={image.newarrivals2 ?? image.fallback} alt='arrival-2' />
            <p className='absolute bottom-0 left-0 right-0 bg-[#ad6343]  text-white opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center'>
              Quick View
            </p>
          </div>
          <ParagraphSecondary value='Essential Cotton Blazzer' />
        </div>

        <div className='relative group cursor-pointer p-1'>
          <div className='relative' onClick={() => handleQuickView(image.newarrivals3, 'Cotton Squareneck Cami', '3')}>
            <img src={image.newarrivals3 ?? image.fallback} alt='arrival-3' />
            <p className='absolute bottom-0 left-0 right-0 bg-[#ad6343]  text-white opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center'>
              Quick View
            </p>
          </div>
          <ParagraphSecondary value='Cotton Squareneck Cami' />
        </div>
      </div>

      {/* Show Modal if product is selected */}
      {selectedProduct && (
        <ProductModal
          image={selectedProduct.image}
          productHeading={selectedProduct.productHeading}
          id={selectedProduct.id}
          onClose={() => setSelectedProduct(null)}
          price={100}
        />
      )}
    </>
  )
}

export default SectionProducts
