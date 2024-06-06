import React, { useEffect, useState } from 'react'
import { Animation } from './Animation'
import { Settings, SettingsPanel } from './SettingsPanel'
import './App.css'

// import { useSound } from './utils'
// const [playTick] = useSound('tick', 5)
// const [playSwitch] = useSound('switch', 5)

function App() {
  const [editing, setEditing] = useState<boolean>(false)
  const [settings, setSettings] = useState<Settings>({
    breathe: 4_000,
    hold: 4_000,
  })

  return (
    <>
      <div className="App">
        <div className="title-bar">
          <span>🫁 Breathe</span>
        </div>
        <div className="app-content">
          { editing ? (
            <SettingsPanel settings={settings} setSettings={setSettings} />
          ) : (
            <Animation settings={settings} />
          ) }
        </div>
      </div>
    </>
  )
}

export default App
