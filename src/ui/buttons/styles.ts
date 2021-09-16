import styled from 'styled-components';

import { ReactComponent as Loading } from '../icons/svg/loading-button.svg';

interface StyledButtonProps {
  typeNum: number;
  isLoading: boolean;
  validate: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 12px;
  background-color: ${(props) => (props.validate ? props.theme.colors.blue : props.theme.colors.light_blue2)};
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  text-align: center;
  border-radius: 6px;
  position: relative;
  cursor: ${(props) => (props.isLoading || !props.validate ? 'not-allowed' : 'pointer')};
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
`;

interface ButtonTextProps {
  validate: boolean;
}

export const ButtonText = styled.span<ButtonTextProps>`
  color: ${(props) => (props.validate ? props.theme.colors.white : props.theme.colors.blue)};
  opacity: ${(props) => (props.validate ? 1 : 0.3)};
  transition: all 0.3s;
`;
