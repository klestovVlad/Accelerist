import styled from 'styled-components';

interface ContentProps {
  numberOfColumns: number;
}

export const Content = styled.div<ContentProps>`
  grid-column-start: 1;
  grid-column-end: ${(props) => props.numberOfColumns};
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 8px;
`;

export const Header = styled.h2`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 148%;
  color: ${(props) => props.theme.colors.black};
`;

export const DetailButton = styled.button``;
