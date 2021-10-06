import { ReactComponent as LoadSvg } from '../icons/svg/load-icon-big.svg';
import styled, { keyframes } from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
`;

export const LoadIconContainer = styled.div``;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadIcon = styled(LoadSvg)`
  animation: ${rotate} 0.6s linear infinite both;
`;
