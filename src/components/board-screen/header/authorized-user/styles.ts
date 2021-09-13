import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
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
