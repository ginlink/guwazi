import { darken, lighten, transparentize } from 'polished'
import { Colors } from './types'

export const baseColors = {
  failure: '#db4f5c',
  primary: '#2776FF',
  primaryBright: lighten(0.1, '#2776FF'),
  primaryDark: darken(0.1, '#2776FF'),
  secondary: '#6C61FF',
  success: 'rgba(20, 201, 140, 1)',
  success1: '#14C98C',
  success2: '#27BFBC',
  warning: '#FFB237',
}

export const additionalColors = {
  binance: '#F0B90B',
  overlay: '#452a7a',
  gold: '#FFC700',
  silver: '#B2B2B2',
  bronze: '#E7974D',
  blue: '#2776FF',
  darkGray: '#565a69',
  white: '#fff',
  black: '#000',
}

export const chartsColor = {
  blue: '#2776FF',
  purple: '#8F87FF',
}

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: '#888D9B',
  bg0: '#FAF9FA',
  bg1: '#FFFFFF',
  bg2: '#F7F8FA',
  bg3: '#EDEEF2',
  bg4: '#CED0D9',
  bg5: '#888D9B',
  backgroundDisabled: '#E9EAEB',
  backgroundAlt: '#FFFFFF',
  backgroundAlt2: 'rgba(255, 255, 255, 0.7)',
  cardBorder: '#DEE2EA',
  contrast: '#191326',
  dropdown: '#F6F6F6',
  dropdownDeep: '#EEEEEE',
  invertedContrast: '#FFFFFF',
  input: '#F3F5F9',
  inputSecondary: '#DEE2EA',
  tertiary: '#e6e5f9',
  text: '#afb3e8',
  text1: '#2B2B2B',
  text2: '#565A69',
  text3: '#888D9B',
  text4: '#C3C5CB',
  text5: '#EDEEF2',
  textBlue: '#5279FF',

  textDisabled: '#BDC2C4',
  textSubtle: '#7990B5',
  disabled: '#C7CEDB',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)',
    inverseBubblegum: 'linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)',
    cardHeader: 'linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)',
    blue: 'linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)',
    violet: 'linear-gradient(90deg, #2776ff 0%, #6c61ff 100%)',
    violetAlt: `linear-gradient(90deg, ${lighten(0.02, '#2776ff')} 0%, ${lighten(0.02, '#6c61ff')} 100%)`,
    violetAlt2: `linear-gradient(90deg, ${transparentize(0.8, '#2776ff')} 0%, ${transparentize(0.8, '#6c61ff')} 100%)`,
    gold: 'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
    greenViolet: `linear-gradient(133deg, rgba(95, 198, 196, 1) 0%, rgba(161, 127, 183, 1) 100%)`,
    greenVioletAlt: 'linear-gradient(133deg, rgba(190, 163, 207, 0.24) 0%, rgba(112, 216, 213, 0.24) 100%)',
    blueViolet: `linear-gradient(133deg, rgba(39, 118, 255, 1) 0%, rgba(108, 97, 255, 1) 100%)`,
    blueVioletAlt: `linear-gradient(133deg, rgba(39, 118, 255, 0.1) 0%, rgba(108, 97, 255, 0.1) 100%)`,
    blueVioletAltTransparency: `linear-gradient(90deg, rgba(142, 46, 246, 0.5) 0%, rgba(87, 175, 251, 0.5) 100%)`,
    blueViolet2: `linear-gradient(133deg, rgba(87, 175, 251, 1) 0%, rgba(142, 46, 246, 1) 100%)`,
    blueVioletAlt2: `linear-gradient(133deg, rgba(39, 118, 255, 0.1) 0%, rgba(108, 97, 255, 0.1) 100%)`,
  },
}

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: '#9A6AFF',
  background: '#888D9B',
  bg0: '#08060B',
  bg1: '#1F2128',
  bg2: '#2C2F36',
  bg3: '#40444F',
  bg4: '#565A69',
  bg5: '#6C7284',
  backgroundDisabled: '#3c3742',
  backgroundAlt: '#27262c',
  backgroundAlt2: 'rgba(39, 38, 44, 0.7)',
  cardBorder: '#383241',
  contrast: '#FFFFFF',
  dropdown: '#1E1D20',
  dropdownDeep: '#100C18',
  invertedContrast: '#191326',
  input: '#372F47',
  inputSecondary: '#262130',

  primaryDark: '#0098A1',
  tertiary: '#353547',
  text: '#afb3e8',
  text1: '#F4EEFF',
  text2: '#C3C5CB',
  text3: '#6C7284',
  text4: '#565A69',
  text5: '#2C2F36',
  textBlue: '#5279FF',
  textDisabled: '#666171',
  textSubtle: '#B8ADD2',
  disabled: '#524B63',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)',
    inverseBubblegum: 'linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)',
    cardHeader: 'linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)',
    blue: 'linear-gradient(180deg, #00707F 0%, #19778C 100%)',
    violet: 'linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)',
    violetAlt: 'linear-gradient(180deg, #434575 0%, #66578D 100%)',
    violetAlt2: 'linear-gradient(180deg, #434575 0%, #66578D 100%)',
    gold: 'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
    greenViolet: `linear-gradient(133deg, rgba(95, 198, 196, 1) 0%, rgba(161, 127, 183, 1) 100%)`,
    greenVioletAlt: 'linear-gradient(133deg, rgba(190, 163, 207, 0.24) 0%, rgba(112, 216, 213, 0.24) 100%)',
    blueViolet: `linear-gradient(133deg, rgba(39, 118, 255, 1) 0%, rgba(108, 97, 255, 1) 100%)`,
    blueVioletAlt: `linear-gradient(133deg, rgba(39, 118, 255, 0.1) 0%, rgba(108, 97, 255, 0.1) 100%)`,
    blueVioletAltTransparency: `linear-gradient(90deg, rgba(142, 46, 246, 0.5) 0%, rgba(87, 175, 251, 0.5) 100%)`,
    blueViolet2: `linear-gradient(133deg, rgba(87, 175, 251, 1) 0%, rgba(142, 46, 246, 1) 100%)`,
    blueVioletAlt2: `linear-gradient(133deg, rgba(39, 118, 255, 0.1) 0%, rgba(108, 97, 255, 0.1) 100%)`,
  },
}
export const kleinColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: '#9A6AFF',
  background: '#14081E',
  // bg0: '#23233C',
  bg0: 'rgba(35, 35, 60, 0.7)',
  bg1: 'rgba(35, 35, 60, 1)',
  bg2: '#2C2F36',
  bg3: '#40444F',
  bg4: '#565A69',
  bg5: '#6C7284',
  backgroundDisabled: '#3c3742',
  backgroundAlt: '#27262c',
  backgroundAlt2: 'rgba(39, 38, 44, 0.7)',
  cardBorder: 'rgba(53, 53, 87, 1)',
  contrast: '#FFFFFF',
  dropdown: '#1E1D20',
  dropdownDeep: '#100C18',
  invertedContrast: '#191326',
  input: '#161522',
  inputSecondary: '#262130',
  primaryDark: '#0098A1',
  tertiary: '#353547',
  text: '#AFB3C8',
  text1: 'rgba(252, 251, 255, 1)',
  text2: '#C3C5CB',
  text3: '#6C7284',
  text4: '#565A69',
  text5: '#2C2F36',
  textBlue: '#5279FF',
  textDisabled: '#666171',
  textSubtle: 'rgba(175, 179, 200, 1)',
  disabled: 'rgba(49, 45, 71, 1)',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)',
    inverseBubblegum: 'linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)',
    cardHeader: 'linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)',
    blue: 'linear-gradient(180deg, #00707F 0%, #19778C 100%)',
    violet: 'linear-gradient(90deg, rgba(62, 55, 255, 1) 0%, rgba(127, 37, 255, 1) 100%)',
    violetAlt: `linear-gradient(90deg, ${lighten(0.02, '#57AFFB')} 0%, ${lighten(0.02, '#8E2EF6')} 100%)`,
    violetAlt2: 'linear-gradient(360deg, rgba(87,175,251,.2) 0%, rgba(142,46,246,.2) 100%)',
    gold: 'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
    greenViolet: `linear-gradient(133deg, rgba(95, 198, 196, 1) 0%, rgba(161, 127, 183, 1) 100%)`,
    greenVioletAlt: 'linear-gradient(133deg, rgba(190, 163, 207, 0.24) 0%, rgba(112, 216, 213, 0.24) 100%)',
    blueViolet: `linear-gradient(90deg, rgba(62, 55, 255, 1) 0%, rgba(127, 37, 255, 1) 100%)`,
    blueVioletAlt: `linear-gradient(90deg, rgba(127, 37, 255, 1) 0%, rgba(62, 55, 255, 1) 100%)`,
    blueVioletAltTransparency: `linear-gradient(-90deg, rgba(142, 46, 246, 0.2) 0%, rgba(87, 175, 251, 0.2) 100%)`,
    blueViolet2: `linear-gradient(133deg, rgba(87, 175, 251, 1) 0%, rgba(142, 46, 246, 1) 100%)`,
    blueVioletAlt2: `linear-gradient(133deg, rgba(39, 118, 255, 0.1) 0%, rgba(108, 97, 255, 0.1) 100%)`,
  },
}