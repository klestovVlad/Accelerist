import styled from 'styled-components';

export const Content = styled.div``;

export const P = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155%;
  color: ${(props) => props.theme.colors.black};
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;
