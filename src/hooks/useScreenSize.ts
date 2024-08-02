import { useEffect, useState } from 'react'

const useScreenSize = () => {
  const [isMdOrLarger, setIsMdOrLarger] = useState<boolean>(window.innerWidth >= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMdOrLarger(window.innerWidth >= 768)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isMdOrLarger
}

export default useScreenSize
