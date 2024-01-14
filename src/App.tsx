import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const time = 4000
  const [side, setSide] = useState(0)
  const [remaining, setRemaining] = useState(time/1000)

  // Update Side
  useEffect(() => {
    const remainderId = setInterval(() => {
      if (remaining === 1) {
        setSide((side+1) % 4)
        setRemaining(4)
      } else {
        setRemaining(remaining-1)
      }
    }, 1000)
    return () => {
      clearInterval(remainderId)
    }
  }, [time, side, remaining])

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

export default App;
