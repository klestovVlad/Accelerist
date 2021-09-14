import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 18px;
`;

export const Column = styled.div``;

export const Header = styled.p`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: ${(props) => props.theme.colors.black};
`;

export const Card = styled.div`
  border-radius: 4px;
  padding: 5px 4px 4px 4px;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6px;
`;

export const CardTitle = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_gray};
`;

export const CardText = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 148%;
  margin-top: 8px;
  color: ${(props) => props.theme.colors.black};
`;
