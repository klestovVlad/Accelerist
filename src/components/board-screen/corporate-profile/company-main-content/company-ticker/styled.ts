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

export const CardContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  margin-left: -16px;
`

export const Card = styled.div`
  padding: 24px;
  margin-left: 16px;
  border: 1px solid;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.line};
`

export const CardName = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 148%;
  color: ${(props) => props.theme.colors.black};
`

export const CardCaption = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_gray};
`
