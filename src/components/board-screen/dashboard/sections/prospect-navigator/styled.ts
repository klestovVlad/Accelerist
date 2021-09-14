import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 40px;
  grid-column: 1 / -1;
`;

export const CardContainer = styled.div`
  display: flex;
  margin: 0 -24px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  margin-left: 24px;
  width: 256px;
  margin-left: 24px;
  margin-top: 16px;
`;

export const Image = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.blue};
`;

export const CardHeader = styled.p`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: ${(props) => props.theme.colors.black};
  margin-top: 16px;
`;

export const CardText = styled.p`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.black};
  margin-top: 4px;
`;

export const CardDate = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_gray};
  margin-top: 8px;
`;
