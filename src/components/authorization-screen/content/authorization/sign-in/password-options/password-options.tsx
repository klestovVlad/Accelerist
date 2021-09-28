import { Checkbox } from '../../../../../../ui/check-box/check-box';
import { A, CheckboxContainer, CheckboxLabel, Container } from './styles';
import React, { FC } from 'react';
import { Field } from 'react-final-form';

export const PasswordOptions: FC = () => (
  <Container>
    <CheckboxContainer>
      <Field name="checkbox" type="checkbox" component={Checkbox} />
      <CheckboxLabel>Remember</CheckboxLabel>
    </CheckboxContainer>

    <A href="/reset">Forgot Password?</A>
  </Container>
);
