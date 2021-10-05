import { validateEmail } from '../../../../../functions/validation';
import { sendChangePasswordEmail } from '../../../../../store/user/';
import { Button } from '../../../../../ui/buttons/button';
import { InputField } from '../../../../../ui/form/input-field';
import { ButtonContainer, Container, P } from './styles';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import { useDispatch } from 'react-redux';

interface InputFormProps {
  setSeconds: Dispatch<SetStateAction<number>>;
}

export const InputForm: FC<InputFormProps> = ({ setSeconds }) => {
  const dispatch = useDispatch();
  const onSubmitForm = (values: FormProps) => {
    setSeconds(40);
    dispatch(sendChangePasswordEmail(values.email));
  };
  return (
    <Form
      onSubmit={onSubmitForm}
      render={({ values, handleSubmit }) => (
        <Container>
          <P>
            Enter your email to receive instructions on how to reset your
            password.
          </P>
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
              validate={validateEmail(values.email) === undefined}
            />
          </ButtonContainer>
        </Container>
      )}
    />
  );
};
