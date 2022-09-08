import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import React from 'react'
import { klein, light } from './theme'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <StyledComponentsThemeProvider theme={light}>{children}</StyledComponentsThemeProvider>
}
