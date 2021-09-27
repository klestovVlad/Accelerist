import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 13px;
  margin-bottom: 62px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CheckboxLabel = styled.div`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.black};
`

export const A = styled.a`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_gray};
  cursor: pointer;
  text-decoration: none;
`

export const Span = styled.span``
