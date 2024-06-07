import React, { useEffect, useState } from 'react'
import './SettingsPanel.css'

export interface Settings {
  breathe: number
  hold: number
}

export interface SettingsPanelProps {
  settings: Settings
  setSettings: (newSettings: Settings) => void
}

export const SettingsPanel = ({ settings, setSettings }: SettingsPanelProps) => {
  const [hasFlash, setFlash] = useState<boolean>(false)

  useEffect(() => {
    if (!hasFlash) return

    const timeoutId = setTimeout(() => {
      setFlash(false)
    }, 5000)

    return () => {
      clearInterval(timeoutId)
    }
  }, [hasFlash])

  const handleBreatheChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFlash(true)
    setSettings({
      ...settings,
      breathe: parseInt(event.target.value, 10),
    })
  }

  const handleHoldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFlash(true)
    setSettings({
      ...settings,
      hold: parseInt(event.target.value, 10),
    })
  }

  return (
    <>
      <div className="settings-panel">
        <label>
          <span>Inhale / Exhale Duration (ms)</span>
          <input type="text" value={settings.breathe} onChange={handleBreatheChange} />
        </label>
        <label>
          <span>Hold Duration (ms)</span>
          <input type="text" value={settings.hold} onChange={handleHoldChange} />
        </label>
        { hasFlash && (
          <span className="flash">Saved!</span>
        ) }
      </div>
    </>
  )
}
