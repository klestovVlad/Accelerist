import styled from 'styled-components';

export const Content = styled.button`
  padding: 10px;
  border: 1px solid;
  border-radius: 6px;
  border-color: ${(props) => props.theme.colors.line};
`;

export const Path = styled.path`
  transition: all 0.5s;
`;
