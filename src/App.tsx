import React, { useEffect, useState } from 'react'
import { useSound } from './utils'
import './App.css'

function App() {
  const time = 4000
  const [playTick] = useSound('tick', 5)
  const [playSwitch] = useSound('switch', 5)
  const [side, setSide] = useState(0)
  const [remaining, setRemaining] = useState(time/1000)

  // Update Side
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (remaining === 1) {
        setSide((side+1) % 4)
        setRemaining(4)
        playSwitch()
      } else {
        setRemaining(remaining-1)
        playTick()
      }
    }, 1000)
    return () => {
      clearInterval(timeoutId)
    }
  }, [time, side, remaining, playSwitch, playTick])

  const klass = (['top', 'right', 'bottom', 'left'])[side]
  const title = (['Breathe In', 'Hold', 'Breathe Out', 'Hold'])[side]
  return (
    <>
      <div className="App">
        <div className="title-bar">
          <span>🫁 Breathe</span>
        </div>
        <div className="app-content">
          <div className={"counter " + klass}>
            <span>{title}</span>
            <span>{remaining}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
