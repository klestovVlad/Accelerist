import { FC } from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';

import { PasswordOptions } from '../../../components/authorization-screen/authorization/sign-in/password-options/password-options';
import { Tabs } from '../../../components/authorization-screen/authorization/tabs/tabs';
import { validateEmail, validateInput } from '../../../functions/validation';
import { postSignInAction } from '../../../store/user/actions';
import { UserSelector } from '../../../store/user/index';
import { Button } from '../../../ui/buttons/button';
import { LinkedIn } from '../../../ui/buttons/linkedIn/linkedIn';
import { InputField } from '../../../ui/form/input-field';
import { Container } from './styles';

export const SignIn: FC = () => {
  const dispatch = useDispatch();
  const loadState = useSelector(UserSelector.selectLoadState);

  interface SignInForm {
    email: string;
    password: string;
  }

  const signUpFormInitialValues: SignInForm = {
    email: '',
    password: '',
  };

  const onSubmitForm = (values: FormProps<SignInForm>) => {
    dispatch(
      postSignInAction({
        email: values.email,
        password: values.password,
      }),
    );
  };
  return (
    <Form
      onSubmit={onSubmitForm}
      initialValues={signUpFormInitialValues}
      render={({ handleSubmit, values, valid, submitting }) => (
        <Container>
          <Tabs activeTub={2} />
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
            value={values.password}
            component={InputField}
            validate={validateInput}
            secureTextEntry
            validateOnBlur
          />
          <PasswordOptions />
          <Button
            label="Login"
            type="submit"
            onClick={handleSubmit}
            colorScheme="blue"
            isLoading={loadState}
            validate={!submitting && valid}
          />
          <LinkedIn />
        </Container>
      )}
    />
  );
};
