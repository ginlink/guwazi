import { MyTheme } from '../types'

export default function Autocomplete(theme: MyTheme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.z20,
        },
      },
    },
  }
}
