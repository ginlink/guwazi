import Card from './Card'
import Paper from './Paper'
import Input from './Input'
import Button from './Button'
import Tooltip from './Tooltip'
import Backdrop from './Backdrop'
import Typography from './Typography'
import CssBaseline from './CssBaseline'
import Autocomplete from './Autocomplete'
import { MyTheme } from '../types'

export default function ComponentsOverrides(theme: MyTheme) {
  return Object.assign(
    Card(theme),
    Input(theme),
    Paper(),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    CssBaseline(),
    Autocomplete(theme)
  )
}
