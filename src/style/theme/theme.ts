import { DefaultTheme } from 'styled-components'

import { colors } from './colors'
import { mediaQuery } from './media-query'

declare module 'styled-components' {
  // eslint-disable-next-line no-shadow
  export interface DefaultTheme {
    colors: Record<string, string>
    mediaQuery: Record<string, string>
  }
}

export const theme: DefaultTheme = {
  colors,
  mediaQuery,
}
