import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import React from 'react'
import { klein } from './theme'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <StyledComponentsThemeProvider theme={klein}>{children}</StyledComponentsThemeProvider>
}
