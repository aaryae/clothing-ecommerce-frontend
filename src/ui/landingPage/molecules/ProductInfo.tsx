import { Plus } from 'lucide-react'
import { useState } from 'react'
import Paragraph from '../atoms/Paragraph'
import ParagraphSecondary from '../atoms/ParagraphSecondary'

const ProductInfo = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null)

  const toggleVisibility = (index: number) => {
    setVisibleIndex(visibleIndex === index ? null : index)
  }

  const productInfos = [
    {
      heading: 'Product Info',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem explicabo adipisci aut vel facere. Quas qui dolore impedit aperiam cupiditate.',
    },
    {
      heading: 'Return Policy',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem explicabo adipisci aut vel facere. Quas qui dolore impedit aperiam cupiditate.',
    },
    {
      heading: 'Shipping Info',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem explicabo adipisci aut vel facere. Quas qui dolore impedit aperiam cupiditate.',
    },
  ]

  return (
    <div className='w-[400px] cursor-pointer '>
      {productInfos.map((info, index) => (
        <div onClick={() => toggleVisibility(index)} key={index}>
          <div className='flex justify-between'>
            <div className='py-2 '>
              <ParagraphSecondary value={info.heading} />
            </div>
            <div className='py-2 flex justify-center items-center h-full my-auto'>
              <Plus />
            </div>
          </div>
          <div
            className={`transition-all ${visibleIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <Paragraph value={info.content} />
          </div>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default ProductInfo
