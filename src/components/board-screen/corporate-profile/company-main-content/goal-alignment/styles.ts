import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 32px;
`;

export const Header = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: ${(props) => props.theme.colors.black};
`;

export const CardContainer = styled.div`
  margin-top: 16px;
  margin-left: -16px;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.line};
  border-radius: 6px;
  width: 112px;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;

export const NoDataText = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155%;
  color: ${(props) => props.theme.colors.black};
  text-align: center;
`;
