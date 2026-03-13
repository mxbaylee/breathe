import React, { useState } from 'react'
import { Animation } from './Animation'
import { About } from './About'
import { Settings, SettingsPanel } from './SettingsPanel'
import { useLocalStorage } from './useLocalStorage'
import './App.css'

// import { useSound } from './utils'
// const [playTick] = useSound('tick', 5)
// const [playSwitch] = useSound('switch', 5)

type PageType = 'breathe' | 'settings' | 'about'

function App() {
  const [page, setPage] = useState<PageType>('breathe')
  const [interacted, setInteracted] = useState(false)
  const [settings, setSettings] = useLocalStorage<Settings>('breathe-settings', {
    breathe: 4_000,
    hold: 4_000,
    volume: 0,
  })

  const goToPage = (p: PageType) => {
    setPage(p)
    setInteracted(true)
  }

  return (
    <>
      <div className="App">
        <div className="title-bar">
          <span>🫁 Breathe</span>
        </div>
        <div className="menu-bar">
          <button
            className={page === 'breathe' ? 'active' : 'inactive' }
            onClick={() => goToPage('breathe')}>
            Breathe
          </button>
          <button
            className={page === 'settings' ? 'active' : 'inactive' }
            onClick={() => goToPage('settings')}>
            Settings
          </button>
          <button
            className={page === 'about' ? 'active' : 'inactive' }
            onClick={() => goToPage('about')}>
            About
          </button>
        </div>
        <div className="app-content">
          { page === 'settings' ? (
            <SettingsPanel settings={settings} setSettings={setSettings} />
          ) : (
            page === 'about' ? (
              <About />
            ) : !interacted ? (
              <div className="play-gate">
                <button type="button" className="play-button" onClick={() => setInteracted(true)}>
                  Begin
                </button>
              </div>
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
