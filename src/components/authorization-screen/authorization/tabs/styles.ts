import styled from 'styled-components';

interface TabsContainerProps {
  activeTub: number;
}

export const Tab = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  position: relative;
  user-select: none;
  height: 100%;
  align-items: center;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  transition: all 0.5s;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.gray};
  cursor: pointer;

  & a {
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const TabsContainer = styled.div<TabsContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.light_gray};
  height: 40px;
  border-radius: 6px;
  position: relative;
  padding: 2px;

  & div${Tab}:nth-child(${(props) => props.activeTub}) {
    background-color: ${(props) => props.theme.colors.secondary_blue};
    color: ${(props) => props.theme.colors.black};
    cursor: default;
  }
`;
