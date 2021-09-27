import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const CompanyName = styled.label`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  margin-right: 104px;
  color: ${(props) => props.theme.colors.black};
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  position: relative;
`

export const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  height: 18px;
`

export const RadioNumber = styled.span`
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: ${(props) => props.theme.colors.black};
`

export const BackgroundLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.colors.line};
`

export const IndicatorRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  margin-top: 36px;
`
