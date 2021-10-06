import { ReactComponent as Logo } from '../../../../ui/icons/svg/logo-board.svg';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 80px;
  background-color: ${(props) => props.theme.colors.secondary_blue2};
  align-items: center;
  text-decoration: none;
`;

export const LogoLabel = styled.p`
  margin-left: 12px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: ${(props) => props.theme.colors.black};
`;

export const LogoIcon = styled(Logo)``;
