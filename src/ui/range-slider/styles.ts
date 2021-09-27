import { Slider } from '@material-ui/core'
import styled from 'styled-components'

export const Content = styled.div`
  padding: 0 36px;
  position: relative;
  display: flex;
  align-items: center;
`

export const Label = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_gray};
  position: absolute;
  top: -4px;
  left: 0px;
  transform: translateY(-100%);
`

export const StyledSlider = styled(Slider)`
  & .MuiSlider-track {
    background-color: ${({ theme }) => theme.colors.blue};
  }

  & .MuiSlider-rail {
    background-color: ${({ theme }) => theme.colors.line};
    margin-left: -32px;
    padding-right: 64px;
  }

  & .MuiSlider-thumb {
    width: 72px;
    height: 32px;
    border: 1px solid ${({ theme }) => theme.colors.secondary_blue};
    border-radius: 6px;
    background: ${({ theme }) => theme.colors.white};
    margin-top: -14px;
    margin-left: -36px;
    &:after {
      display: none;
    }
    &:hover,
    &.Mui-focusVisible {
      box-shadow: unset;
    }
  }

  & .MuiSlider-valueLabel {
    left: unset;
    top: 8px;
    transform: unset;
  }

  &
    .PrivateValueLabel-thumb-1.PrivateValueLabel-open-2
    .PrivateValueLabel-offset-3 {
    transform: unset;
  }

  & .PrivateValueLabel-label-5 {
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.white};
    padding: 8px 16px;
  }

  & .PrivateValueLabel-circle-4 {
    width: unset;
    height: unset;
    display: unset;
    transform: unset;
    align-items: unset;
    border-radius: unset;
    justify-content: unset;
    background-color: unset;
  }
`
