import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

export const BackgroundHeaderContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
`;

export const Header = styled.h1`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 150%;
  color: ${(props) => [props.theme.colors.black]};
  display: block;
  background-color: ${(props) => props.theme.colors.white};
  padding: 24px 60px;
  max-width: 1440px;
  margin: 0 auto;
`;

export const SectionsContainer = styled.div`
  padding: 0px 284px 25px 60px;
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-column-gap: 24px;
  grid-row-gap: 8px;
  margin: 0 auto;
  width: 1440px;

  @media (max-width: ${(props) => props.theme.mediaQuery.large}) {
    min-width: 100%;
    padding: 0px 60px 25px 60px;
    width: auto;
    grid-template-columns: 1fr;
  }
`;
