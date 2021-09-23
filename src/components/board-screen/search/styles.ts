import styled from 'styled-components';

export const Content = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
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

export const Body = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 32px 285px 60px 60px;
  width: 100%;

  @media (max-width: ${(props) => props.theme.mediaQuery.large}) {
    min-width: 100%;
    padding: 32px 60px 25px 60px;
    width: auto;
  }
`;
