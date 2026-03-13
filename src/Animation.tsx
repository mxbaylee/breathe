import React, { useEffect, useRef, useState } from 'react'
import { Settings } from './SettingsPanel'
import { useSound } from './utils'
import './Animation.css'

export interface AnimationProps {
  settings: Settings
}

export const Animation = ({ settings }: AnimationProps) => {
  const [startTime] = useState<any>(new Date())
  const [nowTime, setNowTime] = useState<any>(new Date())
  const [playTick] = useSound('tick', settings.volume)   // inhale / exhale
  const [playSwitch] = useSound('switch', settings.volume) // hold
  const prevPhraseRef = useRef<string | null>(null)

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
  const phase = (
    progress <= settings.breathe ? 'Exhale' : (
      progress < settings.breathe + settings.hold ? 'Hold' : (
        progress <= (settings.breathe*2) + settings.hold ? 'Inhale' : 'Hold'
      )
    )
  )

  // Play sound when phase changes (different sound for hold vs inhale/exhale)
  useEffect(() => {
    if (prevPhraseRef.current !== null && prevPhraseRef.current !== phase) {
      if (phase === 'Hold') {
        playSwitch()
      } else {
        playTick()
      }
    }
    prevPhraseRef.current = phase
  }, [phase, playTick, playSwitch])

  return (
    <div className="animation-container">
      <div className="animation">
        <div className={`progress ${direction}`} style={{animationDuration: `${settings.breathe}ms`}}>
          <div className="timer">{phase}</div>
        </div>
      </div>
    </div>
  )
}
