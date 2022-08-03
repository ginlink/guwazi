import { MyTheme } from '@/theme'
import { scales, variants } from './types'

export const scaleVariants = {
  [scales.MD]: {
    height: [null, '42px', null, '56px'],
    padding: '0 24px',
  },
  [scales.SM]: {
    height: [null, '40px', null, '44px'],
    padding: '0 24px',
  },
  [scales.XS]: {
    height: [null, '27px', null, '34px'],
    padding: '0 16px',
  },
}

export function createStyleVariants(theme: MyTheme) {
  return {
    [variants.PRIMARY]: {
      backgroundColor: 'primary',
      color: 'white',
    },
    [variants.SECONDARY]: {
      backgroundColor: 'transparent',
      border: '2px solid',
      borderColor: 'primary',
      boxShadow: 'none',
      color: 'primary',
      ':disabled': {
        backgroundColor: 'transparent',
      },
    },
    [variants.TERTIARY]: {
      backgroundColor: 'tertiary',
      boxShadow: 'none',
      color: 'primary',
    },
    [variants.SUBTLE]: {
      backgroundColor: 'textSubtle',
      color: 'backgroundAlt',
    },
    [variants.DANGER]: {
      backgroundColor: 'failure',
      color: 'white',
    },
    [variants.WARNING]: {
      backgroundColor: 'bronze',
      color: 'white',
    },
    [variants.SUCCESS]: {
      backgroundColor: 'success',
      color: 'white',
    },
    [variants.TEXT]: {
      backgroundColor: 'transparent',
      color: 'primary',
      boxShadow: 'none',
    },
    [variants.LIGHT]: {
      backgroundColor: 'input',
      color: 'textSubtle',
      boxShadow: 'none',
    },
    [variants.GREEN_VIOLET]: {
      background: theme.colors.gradients.greenViolet,
      color: 'white',
    },
    [variants.GREEN_VIOLET_ALT]: {
      background: theme.colors.gradients.greenVioletAlt,
      color: 'white',
    },
    [variants.GREEN_VIOLET_REVERSE]: {
      color: 'success2',
      border: '1px solid transparent',
      borderRadius: '10px',
      backgroundClip: 'padding-box, border-box',
      backgroundOrigin: 'padding-box, border-box',
      backgroundImage: `linear-gradient(to right, ${theme.colors.bg1}, ${theme.colors.bg1}), ${theme.colors.gradients.greenViolet}`,
    },
    [variants.GREEN_VIOLET_ALT_REVERSE]: {
      color: 'success2',
      border: '1px solid transparent',
      borderRadius: '10px',
      backgroundClip: 'padding-box, border-box',
      backgroundOrigin: 'padding-box, border-box',
      backgroundImage: `linear-gradient(to right, ${theme.colors.background}, ${theme.colors.background}), ${theme.colors.gradients.greenVioletAlt}`,
    },
    [variants.BLUE_VIOLET]: {
      background: theme.colors.gradients.blueViolet,
      color: 'white',
    },
    [variants.BLUE_VIOLET_ALT]: {
      background: theme.colors.gradients.blueVioletAlt,
      color: 'white',
    },
    [variants.BLUE_VIOLET_REVERSE]: {
      color: 'blue',
      border: '1px solid transparent',
      borderRadius: '8px',
      backgroundClip: 'padding-box, border-box',
      backgroundOrigin: 'padding-box, border-box',
      backgroundImage: `linear-gradient(to right, ${theme.colors.bg1}, ${theme.colors.bg1}), ${theme.colors.gradients.blueViolet}`,
    },
    [variants.BLUE_VIOLET_ALT_REVERSE]: {
      color: 'blue',
      border: '1px solid transparent',
      borderRadius: '8px',
      backgroundClip: 'padding-box, border-box',
      backgroundOrigin: 'padding-box, border-box',
      backgroundImage: `linear-gradient(to right, ${theme.colors.background}, ${theme.colors.background}), ${theme.colors.gradients.blueVioletAlt}`,
    },
    [variants.BLUE_VIOLET2]: {
      background: theme.colors.gradients.blueViolet2,
      color: 'white',
    },
    [variants.BLUE_VIOLET_ALT2]: {
      background: theme.colors.gradients.blueVioletAlt2,
      color: 'white',
    },
    [variants.BLUE_VIOLET_REVERSE2]: {
      color: 'blue',
      border: '1px solid transparent',
      borderRadius: '8px',
      backgroundClip: 'padding-box, border-box',
      backgroundOrigin: 'padding-box, border-box',
      backgroundImage: `linear-gradient(to right, ${theme.colors.bg1}, ${theme.colors.bg1}), ${theme.colors.gradients.blueViolet2}`,
    },
    [variants.BLUE_VIOLET_ALT_REVERSE2]: {
      color: 'blue',
      border: '1px solid transparent',
      borderRadius: '8px',
      backgroundClip: 'padding-box, border-box',
      backgroundOrigin: 'padding-box, border-box',
      backgroundImage: `linear-gradient(to right, ${theme.colors.background}, ${theme.colors.background}), ${theme.colors.gradients.blueVioletAlt2}`,
    },
  }
}
