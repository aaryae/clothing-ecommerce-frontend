import { reviews } from '@data/review/review.data'
import ParagraphSecondary from '@ui/landingPage/atoms/ParagraphSecondary'
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
    <div className='relative w-full my-24'>
      <div className='overflow-hidden'>
        <div
          className='flex transition-transform duration-500'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div key={index} className='min-w-full p-8 text-center'>
              <img src={review.image} alt={`Review ${index + 1}`} className='mx-auto mb-4' />
              <div className='md:w-[600px] mx-auto'>
                <ParagraphSecondary value={review.text} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className='absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-transparent'
      >
        <MoveLeft />
      </button>
      <button
        onClick={handleNext}
        className='absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-transparent'
      >
        <MoveRight />
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
