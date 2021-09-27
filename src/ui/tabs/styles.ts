import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.light_gray};
  height: 40px;
  border-radius: 6px;
  position: relative;
  padding: 2px;
`
interface SelectionProps {
  arrLength: number
  selectedNum: number
}

export const Selection = styled.div<SelectionProps>`
  position: absolute;
  display: block;
  width: calc(100% / ${(props) => props.arrLength} - 7px);
  left: calc(100% * (${(props) => props.selectedNum}) / ${(props) => props.arrLength});
  height: calc(100% - 4px);
  background-color: ${(props) => props.theme.colors.secondary_blue};
  transition: all 0.5s;
  border-radius: 6px;
  margin-left: 3.5px;
`

interface TabProps {
  arrLength: number
  isSelected: boolean
}

export const Tab = styled.div<TabProps>`
  display: flex;
  width: calc(100% / ${(props) => props.arrLength});
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
  color: ${(props) => (props.isSelected ? props.theme.colors.black : props.theme.colors.gray)};
  cursor: ${(props) => (props.isSelected ? 'default' : 'pointer')};
`
