import { Theme } from '@mui/system'

export interface MyTheme extends Theme {
  shadows: string[]
  customShadows: {
    z1: string
    z8: string
    z12: string
    z16: string
    z20: string
    z24: string
    primary: string
    secondary: string
    info: string
    success: string
    warning: string
    error: string
  }
}
