/* eslint-disable react/jsx-props-no-spreading */
import { Indicator, StyledCheckbox, StyledLabel } from './styles';
import React, { FC } from 'react';
import { FieldRenderProps } from 'react-final-form';

export const Checkbox: FC<FieldRenderProps<string>> = ({ input }) => (
  <StyledLabel>
    <StyledCheckbox {...input} />
    <Indicator />
  </StyledLabel>
);
