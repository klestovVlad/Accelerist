import styled from 'styled-components'

export const Content = styled.div``

export const Container = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0px auto;
  padding: 32px 20px 20px;
`

export const BackgroundContainer = styled.div`
  width: 100%;
  max-width: 1096px;
  background-color: ${(props) => props.theme.colors.white};
`

export const ContentSection = styled.section`
  display: flex;
`

export const CompanyNews = styled.div`
  padding: 32px 40px;
  width: 100%;
  max-width: 366px;
  border-left: 1px solid;
  border-color: ${(props) => props.theme.colors.line};
`
