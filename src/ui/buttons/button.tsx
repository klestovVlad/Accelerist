import React, { FC } from 'react';

import { StyledButton } from './styles';

interface BlueButtonProps {
  label: string | undefined;
  onClick(): void;
  typeNum: number;
  type: 'button' | 'submit' | 'reset' | undefined;
}

export const Button: FC<BlueButtonProps> = ({ label, typeNum, onClick, type }) => (
  <StyledButton typeNum={typeNum} type={type} onClick={onClick}>
    {label}
  </StyledButton>
);

// **** explication ****
// type 0 - blue button
