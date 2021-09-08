/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { FieldRenderProps } from 'react-final-form';

import { Indicator, StyledCheckbox, StyledLabel } from './styles';

export const Checkbox: FC<FieldRenderProps<string>> = ({ input, children }) => (
  <StyledLabel>
    <StyledCheckbox {...input} />
    <Indicator />
    {children}
  </StyledLabel>
);
