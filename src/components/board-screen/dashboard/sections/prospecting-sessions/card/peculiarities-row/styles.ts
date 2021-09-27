import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
`

export const QualityItem = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: 5px 5px 4px 5px;
  flex-grow: 1;
  margin-left: 18px;
  border-radius: 4px;
  &:first-child {
    margin-left: 0px;
  }
`

export const QualityItemHeader = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_gray};
  text-align: center;
`

export const QualityItemText = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 148%;
  margin-top: 8px;
  color: ${(props) => props.theme.colors.black};
  text-align: center;
`
