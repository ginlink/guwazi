import React, { useMemo } from 'react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles'
import palette from './palette'
import typography from './typography'
import componentsOverride from './overrides'
import shadows, { customShadows } from './shadows'
import { MyTheme } from './types'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const themeOptions: any = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 8 },
      typography,
      shadows,
      customShadows,
    }),
    []
  )

  const theme = createTheme(themeOptions) as unknown as MyTheme
  theme.components = componentsOverride(theme)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
