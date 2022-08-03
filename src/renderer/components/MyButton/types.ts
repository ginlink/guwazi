import { ElementType, ReactNode } from 'react'
import { LayoutProps, SpaceProps } from 'styled-system'
import { PolymorphicComponentProps } from './polymorphic'

export const scales = {
  MD: 'md',
  SM: 'sm',
  XS: 'xs',
} as const

export const variants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  TEXT: 'text',
  DANGER: 'danger',
  WARNING: 'warning',
  SUBTLE: 'subtle',
  SUCCESS: 'success',
  LIGHT: 'light',
  GREEN_VIOLET: 'greenViolet',
  GREEN_VIOLET_REVERSE: 'greenVioletReverse',
  GREEN_VIOLET_ALT: 'greenVioletAlt',
  GREEN_VIOLET_ALT_REVERSE: 'greenVioletAltReverse',

  BLUE_VIOLET: 'blueViolet',
  BLUE_VIOLET_REVERSE: 'blueVioletReverse',
  BLUE_VIOLET_ALT: 'blueVioletAlt',
  BLUE_VIOLET_ALT_REVERSE: 'blueVioletAltReverse',

  BLUE_VIOLET2: 'blueViolet2',
  BLUE_VIOLET_REVERSE2: 'blueVioletReverse2',
  BLUE_VIOLET_ALT2: 'blueVioletAlt2',
  BLUE_VIOLET_ALT_REVERSE2: 'blueVioletAltReverse2',
} as const

export type Scale = typeof scales[keyof typeof scales]
export type Variant = typeof variants[keyof typeof variants]

export interface BaseButtonProps extends LayoutProps, SpaceProps {
  as?: 'a' | 'button' | ElementType
  external?: boolean
  isLoading?: boolean
  scale?: Scale
  variant?: Variant
  disabled?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
}

export type ButtonProps<P extends ElementType = 'button'> = PolymorphicComponentProps<P, BaseButtonProps>
