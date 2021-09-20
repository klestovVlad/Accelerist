import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
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
  margin: 0 auto;
  width: 1440px;

  @media (max-width: ${(props) => props.theme.mediaQuery.large}) {
    min-width: 100%;
    padding: 0px 60px 25px 60px;
    width: auto;
  }
`;
