import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.black};
  height: 80px;
  padding: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const H2 = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-family: 'Gotham Rounded';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.2em;
  text-align: left;
  margin-left: 16px;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
