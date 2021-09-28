import { ReactComponent as UserSvg } from '../../../../../../ui/icons/svg/user.svg';
import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 24px;
`;

export const Header = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 23px;
`;

export const UserDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid;
  border-color: ${(props) => props.theme.colors.line};
  align-items: center;
  margin-left: 10px;
  flex-grow: 1;
`;

export const UserRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  align-items: stretch;

  &:nth-child(2) div${UserDataContainer} {
    border: none;
  }
`;

export const UserImage = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.secondary_blue};
  margin: 8px 0 8px 0;
`;

export const UserIcon = styled(UserSvg)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const UserName = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.black};
`;

export const DateOfVisit = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_grey};
`;
