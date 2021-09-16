import styled from 'styled-components';

export const Content = styled.div``;

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

export const P = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155%;
  color: ${(props) => props.theme.colors.black};
`;
