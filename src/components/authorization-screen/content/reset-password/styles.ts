import styled from 'styled-components';

export const Content = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
`;

export const H1 = styled.h1`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 148%;
  text-align: left;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 25px;
`;
