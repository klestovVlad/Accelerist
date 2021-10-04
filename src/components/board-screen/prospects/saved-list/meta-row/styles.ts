import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
  align-items: center;
  max-width: 1096px;
`;

export const SortSelect = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SortTitle = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_gray};
`;

export const SortListItem = styled.li`
  position: relative;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.black};
  margin-left: 26px;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    background-color: ${(props) => props.theme.colors.blue};
    transition: all 0.3s;
    transform: translateX(50%);
    right: 50%;
  }

  &:hover::before {
    width: 100%;
  }
`;

interface SortListProps {
  activeNum: number;
}

export const SortList = styled.ul<SortListProps>`
  display: flex;
  flex-direction: row;
  li${SortListItem}:nth-child(${(props) => props.activeNum})::before {
    width: 100%;
  }
`;

export const PageControlContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PageCounter = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.black};
  margin: 0 12px 0 12px;
`;

export const PreviousPageButton = styled.button``;

export const NextPageButton = styled.button`
  transform: rotate(180deg);
`;
