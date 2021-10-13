import { FC, SVGProps } from 'react';

import {
  ButtonContent,
  ButtonText,
  IconContainer,
  LoadingIcon,
  LoadingIconContainer,
  StyledButton,
} from './styles';

interface ButtonProps {
  label: string | undefined;
  onClick(): void;
  colorScheme: 'blue' | 'darkTransparent' | 'white' | 'blueLine' | 'redText';
  type: 'button' | 'submit' | 'reset' | undefined;
  isLoading: boolean;
  disable?: boolean;
  Icon?: FC<SVGProps<SVGSVGElement>>;
}

export const Button: FC<ButtonProps> = ({
  label,
  colorScheme,
  onClick,
  type,
  isLoading,
  disable,
  Icon,
}) => (
  <StyledButton
    colorScheme={colorScheme}
    type={type}
    onClick={() => (!isLoading && !disable ? onClick() : null)}
    isLoading={isLoading}
    disable={disable}
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

        <ButtonText disable={disable} colorScheme={colorScheme}>
          {label}
        </ButtonText>
      </ButtonContent>
    )}
  </StyledButton>
);
