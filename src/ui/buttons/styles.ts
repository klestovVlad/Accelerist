import styled, { css, keyframes } from 'styled-components';

import { ReactComponent as Loading } from '../icons/svg/loading-button.svg';

interface StyledButtonProps {
  colorScheme: 'blue' | 'darkTransparent' | 'white' | 'blueLine' | 'redText';
  isLoading: boolean;
  disable?: boolean;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export enum BUTTON_COLOR_SCHEME {
  blue = 'blue',
  darkTransparent = 'darkTransparent',
  white = 'white',
  blueLine = 'blueLine',
  redText = 'redText',
}

const BACKGROUND_COLOR = {
  [BUTTON_COLOR_SCHEME.blue]: css<StyledButtonProps>`
    background-color: ${(props) =>
      props.disable ? props.theme.colors.light_blue2 : props.theme.colors.blue};
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

  [BUTTON_COLOR_SCHEME.blueLine]: css<StyledButtonProps>`
    background-color: ${(props) => props.theme.colors.white};
    padding: 9px 24px;
    font-size: 12px;
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.blue};

    &:hover {
      background-color: rgba(43, 174, 224, 0.1);
    }
  `,

  [BUTTON_COLOR_SCHEME.redText]: css<StyledButtonProps>`
    background-color: ${(props) => props.theme.colors.white};
    padding: 9px 24px;
    font-size: 12px;
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.line};

    &:hover {
      background-color: rgba(240, 86, 88, 0.1);
    }
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ colorScheme }) => BACKGROUND_COLOR[colorScheme]};
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  text-align: center;
  border-radius: 6px;
  position: relative;
  cursor: ${(props) => (props.isLoading || !props.disable ? 'pointer' : 'not-allowed')};
  transition: all 0.3s;
`;

export const LoadingIconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 22px;
  height: 22px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled(Loading)`
  animation: ${rotate} 0.6s linear infinite both;
`;

interface ButtonTextProps {
  disable?: boolean;
  colorScheme: 'blue' | 'darkTransparent' | 'white' | 'blueLine' | 'redText';
}

const BUTTON_TEXT_COLOR = {
  [BUTTON_COLOR_SCHEME.blue]: css<ButtonTextProps>`
    color: ${(props) =>
      !props.disable ? props.theme.colors.white : props.theme.colors.blue};
  `,
  [BUTTON_COLOR_SCHEME.darkTransparent]: css<ButtonTextProps>`
    color: ${(props) =>
      !props.disable ? props.theme.colors.white : props.theme.colors.blue};
  `,

  [BUTTON_COLOR_SCHEME.white]: css<ButtonTextProps>`
    color: ${(props) =>
      !props.disable ? props.theme.colors.black : props.theme.colors.dark_grey};
  `,

  [BUTTON_COLOR_SCHEME.blueLine]: css<ButtonTextProps>`
    color: ${(props) =>
      !props.disable ? props.theme.colors.black : props.theme.colors.dark_grey};
  `,

  [BUTTON_COLOR_SCHEME.redText]: css<ButtonTextProps>`
    color: ${(props) =>
      !props.disable ? props.theme.colors.red : props.theme.colors.dark_grey};
  `,
};

export const ButtonText = styled.span<ButtonTextProps>`
  ${({ colorScheme }) => BUTTON_TEXT_COLOR[colorScheme]};
  opacity: ${(props) => (props.disable ? 0.3 : 1)};
  transition: all 0.3s;
`;

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.div`
  margin-right: 9px;
  height: 18px;
  width: 18px;
`;
