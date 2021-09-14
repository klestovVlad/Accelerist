import styled from 'styled-components';

export const Content = styled.div``;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(256px, 1fr));
  grid-column-gap: 24px;
  grid-row-gap: 15px;
`;
