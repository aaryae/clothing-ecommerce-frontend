// src/components/Carousel.js

import { reviews } from '@data/review/review.data'
import { MoveLeft, MoveRight } from 'lucide-react'
import { useState } from 'react'

const SectionCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  
  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? reviews.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const handleNext = () => {
    const isLastSlide = currentIndex === reviews.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className='relative w-full max-w-xl mx-auto'>
      <div className='overflow-hidden'>
        <div
          className='flex transition-transform duration-500'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div key={index} className='min-w-full p-8 text-center'>
              <p className='text-lg '>{review}</p>
              <p className='mt-4 text-gray-500'>Line/Magazine</p>
            </div>
          ))}
        </div>
      </div>
      <button onClick={handlePrev} className='absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-white '>
        <MoveRight />
      </button>
      <button onClick={handleNext} className='absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-white'>
        <MoveLeft />
      </button>
      <div className='flex justify-center mt-4 space-x-2'>
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default SectionCarousel
