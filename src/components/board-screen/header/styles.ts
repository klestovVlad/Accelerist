import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  background-color: ${(props) => props.theme.colors.secondary_blue2};
  align-items: center;
  padding: 0 66px 0 60px;
  justify-content: space-between;
  position: relative;
  z-index: 9999;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${(props) => props.theme.mediaQuery.large}) {
    flex-grow: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

interface AdaptiveContainerProps {
  checked: boolean;
}

export const AdaptiveContainer = styled.div<AdaptiveContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.mediaQuery.large}) {
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.white};
    min-height: 100vh;
    position: absolute;
    top: 0;
    right: ${(props) => (props.checked ? 0 : -500)}px;
    opacity: ${(props) => (props.checked ? 1 : 0)};
    transition: all 0.3s;
    padding: 132px 40px 32px 40px;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

interface NavShadowProps {
  checked: boolean;
}

export const NavShadow = styled.div<NavShadowProps>`
  display: none;

  @media (max-width: ${(props) => props.theme.mediaQuery.large}) {
    display: ${(props) => (props.checked ? 'block' : 'none')};
    opacity: ${(props) => (props.checked ? 0.4 : 0)};
    transition: all 0.3s;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgb(0, 0, 0);
  }
`;
