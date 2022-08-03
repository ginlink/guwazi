import { DefaultTheme } from 'styled-components'
import base from './base'
import { kleinColors } from './colors'

const kleinTheme: DefaultTheme = {
  ...base,
  isDark: true,
  colors: kleinColors,
}

export default kleinTheme
