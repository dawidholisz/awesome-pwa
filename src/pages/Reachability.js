import React, { useEffect, useState, useCallback } from 'react'
import { Alert } from 'react-bootstrap'

const Reachability = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  const onlineSubscriber = useCallback(() => {
    setIsOnline(navigator.onLine)
  },[navigator.onLine])

  useEffect(() => {
      window.addEventListener('offline', onlineSubscriber)
      window.addEventListener('online', onlineSubscriber)

    return () => {
        window.removeEventListener('offline',onlineSubscriber)
        window.removeEventListener('online',onlineSubscriber)
      }
    }, []  )

  return (
    <Alert variant={isOnline ? 'success' : 'danger'}>
      You are {isOnline ? 'on' : 'off'}line
    </Alert>
  )
}
export default Reachability
