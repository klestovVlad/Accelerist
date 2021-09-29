import styled from 'styled-components';

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.white};
  padding: 32px 26px;
  width: 536px;
  min-height: 268px;
  border-radius: 6px;
  margin: 12px;
`;
