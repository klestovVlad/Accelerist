import { DefaultTheme } from 'styled-components';

import { colors } from './colors';

declare module 'styled-components' {
  // eslint-disable-next-line no-shadow
  export interface DefaultTheme {
    colors: Record<string, string>;
  }
}

export const theme: DefaultTheme = {
  colors,
};
