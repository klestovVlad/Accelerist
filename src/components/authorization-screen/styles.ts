import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  margin-top: 5%;
  width: 454px;
`;

export const H1 = styled.h1`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 148%;
  text-align: center;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 25px;
`;

export const ButtonContainer = styled.div`
  margin: 0px auto 28px;
`;
