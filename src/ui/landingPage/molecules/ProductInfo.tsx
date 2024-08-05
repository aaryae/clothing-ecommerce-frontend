import { Plus } from 'lucide-react'
import { useState } from 'react'
import ParagraphSecondary from '../atoms/ParagraphSecondary'

const ProductInfo = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null)

  const toggleVisibility = (index: number) => {
    setVisibleIndex(visibleIndex === index ? null : index)
  }

  const productInfos = [
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem explicabo adipisci aut vel facere. Quas qui dolore impedit aperiam cupiditate.',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem explicabo adipisci aut vel facere. Quas qui dolore impedit aperiam cupiditate.',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem explicabo adipisci aut vel facere. Quas qui dolore impedit aperiam cupiditate.',
  ]

  return (
    <div className='w-[300px]  '>
      {productInfos.map((info, index) => (
        <div key={index}>
          <div className='flex justify-between'>
            <div className='p-3'>
              <ParagraphSecondary value='Product Info' />
            </div>
            <div onClick={() => toggleVisibility(index)} className='p-3'>
              <Plus />
            </div>
          </div>
          <p
            className={`transition-all px-3 ${visibleIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
          >
            {info}
          </p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default ProductInfo
