import { FlattenSimpleInterpolation } from 'styled-components'
import { Breakpoints, Colors, MediaQueries, Radii, Shadows, Spacing, ZIndices } from './types'

export interface MyTheme {
  siteWidth: number
  isDark: boolean
  colors: Colors
  breakpoints: Breakpoints
  mediaQueries: MediaQueries
  spacing: Spacing
  shadows: Shadows
  radii: Radii
  zIndices: ZIndices

  // css snippets
  flexColumnNoWrap: FlattenSimpleInterpolation
  flexRowNoWrap: FlattenSimpleInterpolation
}

export { darkColors, lightColors } from './colors'
export { default as dark } from './dark'
export { default as light } from './light'
export { default as klein } from './klein'
export * from './base'
export * from './text'
export * from './types'
export * from './globalStyle'
