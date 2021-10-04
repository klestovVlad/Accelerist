import {
  ButtonText,
  LoadingIcon,
  LoadingIconContainer,
  StyledButton,
  ButtonContent,
  IconContainer,
} from './styles';
import React, { FC, SVGProps } from 'react';

interface ButtonProps {
  label: string | undefined;
  onClick(): void;
  colorScheme: 'blue' | 'darkTransparent' | 'white' | 'blueLine' | 'redText';
  type: 'button' | 'submit' | 'reset' | undefined;
  isLoading: boolean;
  validate: boolean;
  Icon?: FC<SVGProps<SVGSVGElement>>;
}

export const Button: FC<ButtonProps> = ({
  label,
  colorScheme,
  onClick,
  type,
  isLoading,
  validate,
  Icon,
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
      <ButtonContent>
        {Icon && (
          <IconContainer>
            <Icon />
          </IconContainer>
        )}

        <ButtonText validate={validate} colorScheme={colorScheme}>
          {label}
        </ButtonText>
      </ButtonContent>
    )}
  </StyledButton>
);
