import React, { FC } from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import { useDispatch } from 'react-redux';

import { validateEmail, validateInput } from '../../../../../functions/validation';
import { UserAction } from '../../../../../store/user/index';
import { Button } from '../../../../../ui/buttons/button';
import { LinkedIn } from '../../../../../ui/buttons/linkedIn/linkedIn';
import { InputField } from '../../../../../ui/form/input-field';
import { PasswordOptions } from './password-options/password-options';
import { Container } from './styles';

export const SignIn: FC = () => {
  const dispatch = useDispatch();
  const onSubmitForm = (values: FormProps) => {
    console.log(values);
    dispatch(
      UserAction.signInRequest({
        email: values.email,
        password: values.password,
      }),
    );
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
            inputType="text"
            value={values.email}
            component={InputField}
            validate={validateEmail}
          />
          <Field
            name="password"
            label="Password"
            inputType="password"
            placeholder="Write your password..."
            value={values.email}
            component={InputField}
            validate={validateInput}
            secureTextEntry
            validateOnBlur
          />
          <PasswordOptions />
          <Button label="Login" type="submit" onClick={handleSubmit} typeNum={0} />
          <LinkedIn />
        </Container>
      )}
    />
  );
};
