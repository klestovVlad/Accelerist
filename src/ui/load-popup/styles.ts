import { ReactComponent as LoadSvg } from '../icons/svg/load-icon-big.svg';
import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
`;

export const LoadIconContainer = styled.div``;

export const LoadIcon = styled(LoadSvg)`
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
