import { Dispatch, FC, SetStateAction } from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import { useDispatch } from 'react-redux';

import { validateEmail } from '../../../../functions/validation';
import { sendChangePasswordEmail } from '../../../../store/user/';
import { Button } from '../../../../ui/buttons/button';
import { InputField } from '../../../../ui/form/input-field';
import { ButtonContainer, Container, P } from './styles';

interface InputFormProps {
  setSeconds: Dispatch<SetStateAction<number>>;
}

export const InputForm: FC<InputFormProps> = ({ setSeconds }) => {
  const dispatch = useDispatch();

  interface ResetPasswordForm {
    email: string;
  }

  const signUpFormInitialValues: ResetPasswordForm = {
    email: '',
  };

  const onSubmitForm = (values: FormProps<ResetPasswordForm>) => {
    setSeconds(40);
    dispatch(sendChangePasswordEmail(values.email));
  };
  return (
    <Form
      onSubmit={onSubmitForm}
      initialValues={signUpFormInitialValues}
      render={({ valid, values, handleSubmit }) => (
        <Container>
          <P>Enter your email to receive instructions on how to reset your password.</P>
          <Field
            name="email"
            label="Email"
            placeholder="Write your email..."
            inputType="text"
            value={values.email}
            component={InputField}
            validate={validateEmail}
          />
          <ButtonContainer>
            <Button
              label="Reset"
              type="submit"
              onClick={handleSubmit}
              colorScheme="blue"
              isLoading={false}
              disable={!valid}
            />
          </ButtonContainer>
        </Container>
      )}
    />
  );
};
