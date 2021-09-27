import React, { FC } from 'react'

import {
  ButtonText,
  LoadingIcon,
  LoadingIconContainer,
  StyledButton,
} from './styles'

interface ButtonProps {
  label: string | undefined
  onClick(): void
  colorScheme: 'blue' | 'darkTransparent' | 'white'
  type: 'button' | 'submit' | 'reset' | undefined
  isLoading: boolean
  validate: boolean
}

export const Button: FC<ButtonProps> = ({
  label,
  colorScheme,
  onClick,
  type,
  isLoading,
  validate,
}) => (
  <StyledButton
    colorScheme={colorScheme}
    type={type}
    onClick={() => (!isLoading && validate ? onClick() : null)}
    isLoading={isLoading}
    validate={validate}
  >
    {isLoading ? (
      <>
        <p>&#160;</p>
        <LoadingIconContainer>
          <LoadingIcon />
        </LoadingIconContainer>
      </>
    ) : (
      <ButtonText validate={validate} colorScheme={colorScheme}>
        {label}
      </ButtonText>
    )}
  </StyledButton>
)
