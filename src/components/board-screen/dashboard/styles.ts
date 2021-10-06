import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0px auto;
  padding: 32px 20px 20px;
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
  max-width: 1096px;
  width: 100%;

  @media (max-width: ${(props) => props.theme.mediaQuery.large}) {
    min-width: 100%;
    width: auto;
  }
`;
