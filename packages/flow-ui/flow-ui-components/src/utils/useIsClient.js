import { useState, useEffect } from 'react'

//Hook to fix ssr rehydration issue: https://reactjs.org/docs/react-dom.html#hydrate
export default () => {
  const [isClient, setClient] = useState(false)
  const renderKey = isClient ? 'client' : 'server'

  useEffect(() => {
    setClient(true)
  }, [])

  return { isClient, renderKey }
}
