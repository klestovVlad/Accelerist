import {
  validateEmail,
  validateInput,
} from '../../../../../functions/validation';
import { UserSelector } from '../../../../../store/user';
import { postSignUpAction } from '../../../../../store/user/actions';
import { Button } from '../../../../../ui/buttons/button';
import { LinkedIn } from '../../../../../ui/buttons/linkedIn/linkedIn';
import { InputField } from '../../../../../ui/form/input-field';
import { Container } from './styles';
import { TermsOfServices } from './terms-of-services/terms_of_services';
import React, { FC } from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';

export const SignUp: FC = () => {
  const dispatch = useDispatch();
  const loadState = useSelector(UserSelector.selectLoadState);
  const onSubmitForm = (values: FormProps) => {
    dispatch(
      postSignUpAction({
        email: values.email,
        password: values.password,
      })
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
          <TermsOfServices />
          <Button
            label="Registration"
            type="submit"
            onClick={handleSubmit}
            colorScheme="blue"
            isLoading={loadState}
            validate={
              validateEmail(values.email) === undefined &&
              validateInput(values.password) === undefined
            }
          >
            apply
          </Button>
          <LinkedIn />
        </Container>
      )}
    />
  );
};
