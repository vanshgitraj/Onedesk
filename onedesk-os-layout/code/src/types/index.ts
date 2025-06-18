export interface AppShortcut {
  name: string
  icon: string
  path: string
}

export interface ThemeOption {
  name: 'light' | 'dark'
  value: string
}