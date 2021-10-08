import { FC } from 'react';
import { FieldRenderProps } from 'react-final-form';

import { Indicator, StyledCheckbox, StyledLabel } from './styles';

export const Checkbox: FC<FieldRenderProps<string>> = ({ input }) => (
  <StyledLabel>
    <StyledCheckbox {...input} />
    <Indicator />
  </StyledLabel>
);
