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

export const SettingsPanel = ({ settings }: SettingsPanelProps) => {
  return (
    <>
      <div className="settings-panel">
        hello world
      </div>
    </>
  )
}
