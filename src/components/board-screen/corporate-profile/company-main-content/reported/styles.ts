import styled from 'styled-components'

export const Content = styled.div`
  margin-top: 32px;
`

export const Header = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: ${(props) => props.theme.colors.black};
`

export const Table = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  border-radius: 6px;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.line};
`

export const TableCell = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  &:first-child {
    border-right: 1px solid;
    border-color: ${(props) => props.theme.colors.line};
  }
`

export const TableCellCaption = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_gray};
`

export const TableCellInfo = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  margin-top: 4px;
  color: ${(props) => props.theme.colors.black};
`
