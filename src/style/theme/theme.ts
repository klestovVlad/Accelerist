import { DefaultTheme } from 'styled-components';

import { colors } from './colors';
import { mediaQuery } from './media-query';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<string, string>;
    mediaQuery: Record<string, string>;
  }
}

export const theme: DefaultTheme = {
  colors,
  mediaQuery,
};
