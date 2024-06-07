import React, { useEffect, useState } from 'react'
import { Animation } from './Animation'
import { About } from './About'
import { Settings, SettingsPanel } from './SettingsPanel'
import './App.css'

// import { useSound } from './utils'
// const [playTick] = useSound('tick', 5)
// const [playSwitch] = useSound('switch', 5)

type PageType = 'breathe' | 'settings' | 'about'

function App() {
  const [page, setPage] = useState<PageType>('breathe')
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
        <div className="menu-bar">
          <button
            className={page === 'breathe' ? 'active' : 'inactive' }
            onClick={() => { setPage('breathe') }}>
            Breathe
          </button>
          <button
            className={page === 'settings' ? 'active' : 'inactive' }
            onClick={() => { setPage('settings') }}>
            Settings
          </button>
          <button
            className={page === 'about' ? 'active' : 'inactive' }
            onClick={() => { setPage('about') }}>
            About
          </button>
        </div>
        <div className="app-content">
          { page === 'settings' ? (
            <SettingsPanel settings={settings} setSettings={setSettings} />
          ) : (
            page === 'about' ? (
              <About />
            ) : (
              <Animation settings={settings} />
            )
          ) }
        </div>
      </div>
    </>
  )
}

export default App
