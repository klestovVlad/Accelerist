import React, { FC } from 'react';

import { LoadingIcon, LoadingIconContainer, StyledButton } from './styles';

interface BlueButtonProps {
  label: string | undefined;
  onClick(): void;
  typeNum: number;
  type: 'button' | 'submit' | 'reset' | undefined;
  isLoading: boolean;
}

export const Button: FC<BlueButtonProps> = ({ label, typeNum, onClick, type, isLoading }) => (
  <StyledButton typeNum={typeNum} type={type} onClick={() => (isLoading ? onClick() : onClick())} isLoading={isLoading}>
    {isLoading ? (
      <>
        <p>&#160;</p>
        <LoadingIconContainer>
          <LoadingIcon />
        </LoadingIconContainer>
      </>
    ) : (
      label
    )}
  </StyledButton>
);

// **** explication ****
// type 0 - blue button
