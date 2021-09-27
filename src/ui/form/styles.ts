import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  position: relative;
`

interface InputProps {
  validateError: boolean | undefined
}

export const Input = styled.input<InputProps>`
  border: 1px solid;
  border-color: ${(props) =>
    props.validateError ? props.theme.colors.red : props.theme.colors.line};
  border-radius: 6px;
  background-color: ${(props) =>
    props.validateError ? props.theme.colors.light_red : 'none'};
  padding: 11px 31px 10px 16px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155%;
  color: ${(props) => props.theme.colors.black};
`

export const Label = styled.span`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_gray};
  margin-bottom: 4px;
`

export const ErrorSignature = styled(Label)`
  color: ${(props) => props.theme.colors.red};
  position: absolute;
  bottom: -19px;
  left: 0;
`
