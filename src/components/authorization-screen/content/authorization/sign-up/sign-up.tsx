import React, { FC } from 'react';
import { Field, Form, FormProps } from 'react-final-form';

import { Button } from '../../../../../ui/buttons/button';
import { LinkedIn } from '../../../../../ui/buttons/linkedIn/linkedIn';
import { InputField } from '../../../../../ui/form/input-field';
import { Container } from './styles';
import { TermsOfServices } from './terms-of-services/terms_of_services';

export const SignUp: FC = () => {
  const onSubmitForm = (values: FormProps) => {
    console.log(values);
  };
  return (
    <Form
      onSubmit={onSubmitForm}
      render={({ values, handleSubmit }) => (
        <Container>
          <Field
            name="email"
            label="Email"
            placeholder="Write your email..."
            value={values.email}
            component={InputField}
          />
          <Field
            name="password"
            label="Password"
            placeholder="Write your password..."
            value={values.email}
            component={InputField}
            secureTextEntry
          />
          <TermsOfServices />
          <Button label="Registration" type="submit" onClick={handleSubmit} typeNum={0}>
            apply
          </Button>
          <LinkedIn />
        </Container>
      )}
    />
  );
};
