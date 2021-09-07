import React, { FC } from 'react';
import { Field, Form, FormProps } from 'react-final-form';

import { InputField } from '../../../../../ui/form/input-field';

export const SignIn: FC = () => {
  const onSubmitForm = (values: FormProps) => {
    console.log(values);
  };
  return (
    <Form
      onSubmit={onSubmitForm}
      render={({ values, handleSubmit }) => (
        <div>
          <Field name="email" placeholder="Write your email..." value={values.email} component={InputField} />
          <button type="submit" onClick={handleSubmit}>
            apply
          </button>
        </div>
      )}
    />
  );
};
