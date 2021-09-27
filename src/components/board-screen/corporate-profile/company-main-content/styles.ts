import styled from 'styled-components'

export const Content = styled.div`
  padding: 32px 40px;
  width: 100%;
  max-width: 730px;
`

export const Header = styled.h3`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 148%;
  color: ${(props) => props.theme.colors.black};
`

export const DescriptionHeader = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  margin-top: 24px;
  color: ${(props) => props.theme.colors.black};
`

export const Description = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155%;
  margin-top: 16px;
  color: ${(props) => props.theme.colors.black};
`
