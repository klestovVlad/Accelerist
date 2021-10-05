import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
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
