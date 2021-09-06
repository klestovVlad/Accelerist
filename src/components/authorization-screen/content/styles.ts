import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  margin-top: 5%;
`;
