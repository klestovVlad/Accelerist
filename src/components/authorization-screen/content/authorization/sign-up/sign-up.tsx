import React, { FC } from 'react'
import { Field, Form, FormProps } from 'react-final-form'

import {
  validateEmail,
  validateInput,
} from '../../../../../functions/validation'
import { Button } from '../../../../../ui/buttons/button'
import { LinkedIn } from '../../../../../ui/buttons/linkedIn/linkedIn'
import { InputField } from '../../../../../ui/form/input-field'
import { Container } from './styles'
import { TermsOfServices } from './terms-of-services/terms_of_services'

export const SignUp: FC = () => {
  const onSubmitForm = (values: FormProps) => {
    console.log(values)
  }
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
            isLoading={false}
            validate={false}
          >
            apply
          </Button>
          <LinkedIn />
        </Container>
      )}
    />
  )
}
