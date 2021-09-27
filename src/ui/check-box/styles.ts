import styled from 'styled-components'

import checked from '../icons/svg/checked.svg'

export const StyledLabel = styled.label`
  position: relative;
  padding-left: 30px;
  font-size: 12px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.black};
`

export const StyledCheckbox = styled.input`
  appearance: none;
  margin: 0;
  position: absolute;
`

export const Indicator = styled.span`
  margin-left: -30px;
  position: absolute;
  width: 20px;
  height: 20px;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.gray};
  border-radius: 3px;
  transform: translateY(-50%);
  cursor: pointer;

  ${StyledCheckbox}:not(:disabled):checked  + & {
    background-color: ${(props) => props.theme.colors.secondary_blue};
    border-color: ${(props) => props.theme.colors.secondary_blue};
  }

  ${StyledCheckbox}:disabled + & {
    background-color: #f0f0f0;
  }

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
  ${StyledCheckbox}:checked + &:after {
    display: block;
    width: 20px;
    height: 18px;
    background: url(${checked}) no-repeat center center;
  }
`
