import styled, { css } from 'styled-components'

import { ReactComponent as Loading } from '../icons/svg/loading-button.svg'

interface StyledButtonProps {
  colorScheme: 'blue' | 'darkTransparent' | 'white'
  isLoading: boolean
  validate: boolean
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export enum BUTTON_COLOR_SCHEME {
  blue = 'blue',
  darkTransparent = 'darkTransparent',
  white = 'white',
}

const BACKGROUND_COLOR = {
  [BUTTON_COLOR_SCHEME.blue]: css<StyledButtonProps>`
    background-color: ${(props) =>
      props.validate
        ? props.theme.colors.blue
        : props.theme.colors.light_blue2};
    padding: 12px 24px;
    font-size: 16px;
  `,
  [BUTTON_COLOR_SCHEME.darkTransparent]: css<StyledButtonProps>`
    background-color: ${(props) => props.theme.colors.dark_transparent};
    padding: 9px 24px;
    font-size: 12px;
  `,

  [BUTTON_COLOR_SCHEME.white]: css<StyledButtonProps>`
    background-color: ${(props) => props.theme.colors.white};
    padding: 12px 24px;
    font-size: 16px;
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.line};
  `,
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ colorScheme }) => BACKGROUND_COLOR[colorScheme]};
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  text-align: center;
  border-radius: 6px;
  position: relative;
  cursor: ${(props) =>
    props.isLoading || props.validate ? 'pointer' : 'not-allowed'};
  transition: all 0.3s;
`

export const LoadingIconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 22px;
  height: 22px;
`

export const LoadingIcon = styled(Loading)`
  @keyframes rotate-center {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  animation: rotate-center 0.6s linear infinite both;
`

interface ButtonTextProps {
  validate: boolean
  colorScheme: 'blue' | 'darkTransparent' | 'white'
}

const BUTTON_TEXT_COLOR = {
  [BUTTON_COLOR_SCHEME.blue]: css<ButtonTextProps>`
    color: ${(props) =>
      props.validate ? props.theme.colors.white : props.theme.colors.blue};
  `,
  [BUTTON_COLOR_SCHEME.darkTransparent]: css<ButtonTextProps>`
    color: ${(props) =>
      props.validate ? props.theme.colors.white : props.theme.colors.blue};
  `,

  [BUTTON_COLOR_SCHEME.white]: css<ButtonTextProps>`
    color: ${(props) =>
      props.validate ? props.theme.colors.black : props.theme.colors.dark_grey};
  `,
}

export const ButtonText = styled.span<ButtonTextProps>`
  ${({ colorScheme }) => BUTTON_TEXT_COLOR[colorScheme]};
  opacity: ${(props) => (props.validate ? 1 : 0.3)};
  transition: all 0.3s;
`
