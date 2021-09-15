import styled from 'styled-components';

import { ReactComponent as Loading } from '../icons/svg/loading-button.svg';

interface StyledButtonProps {
  typeNum: number;
  isLoading: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 12px;
  background-color: ${(props) => props.theme.colors.blue};
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  position: relative;
  cursor: ${(props) => (props.isLoading ? 'not-allowed' : 'pointer')};
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
