import { image } from '@config/constant/image'

function App() {
  return (
    <>
      <div className='p-10 m-10'>
        <img src={image.frontmen} alt='' />

        <h1 className='font-1'> The quick brown fox jumps over lazy dog</h1>
        <h1 className='font-2'> The quick brown fox jumps over lazy dog</h1>

        <h1 className='font-3'> The quick brown fox jumps over lazy dog</h1>

        <h1 className='font-4'> The quick brown fox jumps over lazy dog</h1>
      </div>
    </>
  )
}

export default App
