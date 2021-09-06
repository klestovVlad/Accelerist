import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 148%;
  text-align: center;
  color: ${(props) => props.theme.colors.black};
`;
