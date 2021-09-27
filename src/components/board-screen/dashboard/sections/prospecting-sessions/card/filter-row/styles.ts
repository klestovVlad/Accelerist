import styled from 'styled-components'

export const Content = styled.div`
  margin-top: 16px;
`

export const Header = styled.p`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_gray};
`

export const FilterItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const FilterItem = styled.div`
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.light_blue_line};
  border-radius: 6px;
  padding: 6px 10px;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  margin-left: 8px;
  margin-top: 8px;
  flex-wrap: wrap;
  text-transform: capitalize;

  &:first-child {
    margin-left: 4.5px;
  }
`
