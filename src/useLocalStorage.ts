import { useState, useEffect, useCallback } from 'react'

function readFromStorage<T>(key: string, initialValue: T): T {
  if (typeof window === 'undefined') return initialValue
  try {
    const raw = window.localStorage.getItem(key)
    if (raw == null) return initialValue
    return JSON.parse(raw) as T
  } catch {
    return initialValue
  }
}

/**
 * useState that syncs with localStorage. Value must be JSON-serializable.
 * Reads from localStorage on mount; writes on every update; stays in sync across tabs.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  const [stored, setStored] = useState<T>(() => readFromStorage(key, initialValue))

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStored((prev) => {
        const next = value instanceof Function ? value(prev) : value
        if (typeof window !== 'undefined') {
          try {
            window.localStorage.setItem(key, JSON.stringify(next))
          } catch {
            // quota exceeded or disabled
          }
        }
        return next
      })
    },
    [key]
  )

  // Sync when another tab changes this key
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === key && e.newValue != null) {
        try {
          setStored(JSON.parse(e.newValue) as T)
        } catch {
          // ignore invalid stored value
        }
      }
    }
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  }, [key])

  return [stored, setValue]
}
