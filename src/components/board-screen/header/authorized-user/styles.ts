import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  position: relative;
`;

export const UserIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.white};
`;

interface UserNameProps {
  sidebarLocation: boolean;
}

export const UserName = styled.p<UserNameProps>`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => (props.sidebarLocation ? 16 : 12)}px;
  line-height: 150%;
  margin-left: 12px;
  color: ${(props) => props.theme.colors.black};
`;

export const OptionPopup = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 48px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(40 31 61 / 4%) 0px 2px 20px;
  border-radius: 6px;
  padding: 24px;
  z-index: 9;
`;

export const LogoutButton = styled.button`
  font-family: Rubik;
  font-size: 12px;
  color: ${(props) => props.theme.colors.red};
  line-height: normal;
`;
