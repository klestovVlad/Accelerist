import React, { FC } from 'react';
import { FieldRenderProps } from 'react-final-form';

import { Container, Input, Label } from './styles';

interface InputFieldProps extends FieldRenderProps<string> {
  label: string;
  placeholder: string;
}

export const InputField: FC<InputFieldProps> = ({ input, meta, placeholder, label }) => (
  <Container>
    <Label>{label}</Label>
    <Input
      onChange={input.onChange}
      value={input.value}
      validateError={meta.error !== undefined && !!meta.touched}
      placeholder={placeholder}
    />
  </Container>
);
