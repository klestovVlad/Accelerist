import React, { FC } from 'react';

import { ButtonText, LoadingIcon, LoadingIconContainer, StyledButton } from './styles';

interface BlueButtonProps {
  label: string | undefined;
  onClick(): void;
  typeNum: number;
  type: 'button' | 'submit' | 'reset' | undefined;
  isLoading: boolean;
  validate: boolean;
}

export const Button: FC<BlueButtonProps> = ({ label, typeNum, onClick, type, isLoading, validate }) => (
  <StyledButton
    typeNum={typeNum}
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
      <ButtonText validate={validate}>{label}</ButtonText>
    )}
  </StyledButton>
);

// **** explication ****
// type 0 - blue button
