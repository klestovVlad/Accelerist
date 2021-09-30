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

export const Body = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0px auto;
  padding: 32px 20px 20px;

  @media (max-width: ${(props) => props.theme.mediaQuery.large}) {
    min-width: 100%;
    padding: 32px 60px 25px 60px;
    width: auto;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -12px;
  flex-wrap: wrap;
`;
