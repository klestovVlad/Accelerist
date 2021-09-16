import React, { Dispatch, FC, SetStateAction } from 'react';
import { Field, Form, FormProps } from 'react-final-form';

import { validateEmail } from '../../../../../functions/validation';
import { Button } from '../../../../../ui/buttons/button';
import { InputField } from '../../../../../ui/form/input-field';
import { ButtonContainer, Container, P } from './styles';

interface InputFormProps {
  setSeconds: Dispatch<SetStateAction<number>>;
}

export const InputForm: FC<InputFormProps> = ({ setSeconds }) => {
  const onSubmitForm = (values: FormProps) => {
    setSeconds(40);
    console.log(values);
  };
  return (
    <Form
      onSubmit={onSubmitForm}
      render={({ values, handleSubmit }) => (
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
              typeNum={0}
              isLoading={false}
              validate={validateEmail(values.email) === undefined}
            />
          </ButtonContainer>
        </Container>
      )}
    />
  );
};