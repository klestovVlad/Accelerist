import { FC } from 'react';
import { Field } from 'react-final-form';
import { Link } from 'react-router-dom';

import { routes } from '../../../../../routes/routes';
import { Checkbox } from '../../../../../ui/check-box/check-box';
import { CheckboxContainer, CheckboxLabel, Container, LinkStyle } from './styles';

export const PasswordOptions: FC = () => (
  <Container>
    <CheckboxContainer>
      <Field name="checkbox" type="checkbox" component={Checkbox} />
      <CheckboxLabel>Remember</CheckboxLabel>
    </CheckboxContainer>

    <Link to={routes.public.resetPassword}>
      <LinkStyle>Reset password</LinkStyle>
    </Link>
  </Container>
);
