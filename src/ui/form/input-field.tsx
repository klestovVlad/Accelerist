import { PasswordEye } from '../icons/password-eye/password-eye';
import { Container, ErrorSignature, Input, Label } from './styles';
import React, { FC, useState } from 'react';
import { FieldRenderProps } from 'react-final-form';

interface InputFieldProps extends FieldRenderProps<string> {
  label: string;
  placeholder: string;
  inputType: string;
}

export const InputField: FC<InputFieldProps> = ({
  input,
  meta,
  placeholder,
  label,
  inputType,
}) => {
  const [hidePassword, setHidePassword] = useState(false);
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        onChange={input.onChange}
        value={input.value}
        validateError={meta.error !== undefined && !!meta.touched}
        placeholder={placeholder}
        type={hidePassword ? 'text' : inputType}
      />
      {meta.error && meta.touched && (
        <ErrorSignature>{meta.error}</ErrorSignature>
      )}
      {inputType === 'password' && (
        <PasswordEye
          hidePassword={hidePassword}
          setHidePassword={setHidePassword}
        />
      )}
    </Container>
  );
};
