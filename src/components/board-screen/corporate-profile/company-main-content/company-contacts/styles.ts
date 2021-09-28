import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 32px;
`;

export const Header = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: ${(props) => props.theme.colors.black};
`;

export const ContactsContainer = styled.div`
  margin-top: 16px;
  padding: 6px 20px 21px 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 6px;
  border: 1px solid;
  align-items: center;
  justify-content: center;
  border-color: ${(props) => props.theme.colors.line};
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 14px;
  justify-content: center;
  margin-left: 25px;
`;

export const ContactInfo = styled.a`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;
  margin-left: 10px;
`;
