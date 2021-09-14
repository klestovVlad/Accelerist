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

export const CompanyLogo = styled.div`
  width: 83px;
  height: 83px;
  background-color: ${(props) => props.theme.colors.light_blue};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.line};
  border-radius: 8px;
  margin-left: 12px;

  &:first-child {
    margin-left: 0;
  }
`;
