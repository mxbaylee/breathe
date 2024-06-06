import React, { useEffect, useState } from 'react'
import { Settings } from './SettingsPanel'
import './Animation.css'

export interface AnimationProps {
  settings: Settings
}

export const Animation = ({ settings }: AnimationProps) => {
  const [startTime] = useState<any>(new Date())
  const [nowTime, setNowTime] = useState<any>(new Date())

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setNowTime(new Date())
    }, 100)
    return () => {
      clearInterval(timeoutId)
    }
  }, [setNowTime])

  const difference:number = nowTime.getTime() - startTime.getTime()
  const progress = difference % ((settings.breathe + settings.hold)*2)
  const direction = progress > settings.breathe + settings.hold ? 'in' : 'out'
  const phrase = (
    progress <= settings.breathe ? 'Breathe Out' : (
      progress < settings.breathe + settings.hold ? 'Hold' : (
        progress <= (settings.breathe*2) + settings.hold ? 'Breathe In' : 'Hold'
      )
    )
  )

  return (
    <div className="animation-container">
      <div className="animation">
        <div className={`progress ${direction}`} style={{animationDuration: `${settings.breathe}ms`}}>
          <div className="timer">{phrase}</div>
        </div>
      </div>
    </div>
  )
}
