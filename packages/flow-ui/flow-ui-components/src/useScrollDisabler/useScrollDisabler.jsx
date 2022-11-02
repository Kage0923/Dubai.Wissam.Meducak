import { useLayoutEffect } from 'react'

const useScrollDisabler = () =>
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden'
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle)
  }, [])

export default useScrollDisabler
