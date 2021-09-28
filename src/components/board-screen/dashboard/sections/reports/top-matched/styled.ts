import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 24px;
`;

export const Header = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: ${(props) => props.theme.colors.black};
`;

export const CompanyLogoContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
`;

export const LinkContainer = styled.a`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  height: 71px;
  background: ${(props) => props.theme.colors.background};
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
`;

export const LinkText = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155%;
  color: ${(props) => props.theme.colors.black};
`;
