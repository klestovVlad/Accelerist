import styled from 'styled-components';

export const Container = styled.section`
  padding: 24px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  margin: 12px;
  width: 536px;
`;

export const Header = styled.h3`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
`;

export const Underline = styled.br`
  background-color: ${(props) => props.theme.colors.line};
  height: 1px;
  display: block;
  content: '';
  margin-top: 9px;
`;
