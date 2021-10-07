import { TermsOfServices } from '../../../components/authorization-screen/authorization/sign-up/terms-of-services/terms_of_services';
import { Tabs } from '../../../components/authorization-screen/authorization/tabs/tabs';
import { validateEmail, validateInput } from '../../../functions/validation';
import { UserSelector } from '../../../store/user';
import { postSignUpAction } from '../../../store/user/actions';
import { Button } from '../../../ui/buttons/button';
import { LinkedIn } from '../../../ui/buttons/linkedIn/linkedIn';
import { InputField } from '../../../ui/form/input-field';
import { Container } from './styles';
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
      render={({ valid, values, handleSubmit }) => (
        <Container>
          <Tabs activeTub={1} />
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
            validate={valid}
          >
            apply
          </Button>
          <LinkedIn />
        </Container>
      )}
    />
  );
};
