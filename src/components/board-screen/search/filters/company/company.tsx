import React, { FC, useState } from 'react';
import { Field, FormProps } from 'react-final-form';

import { Input } from '../../../../../ui/input/input';
import { RangeSlider } from '../../../../../ui/range-slider/range-slider';
import { Content, Header, InputContainer } from './styles';

export const Company: FC<FormProps> = () => {
  const [rangeValue, setRangeValue] = useState<Array<number>>([0, 100]);

  return (
    <Content>
      <Header>Company</Header>
      <InputContainer>
        <Field name="Industry" label="Industry" component={Input} />
        <Field name="Geographic Location" label="Geographic Location" component={Input} />
        <Field name="CSR Focus" label="CSR Focus" component={Input} />
        <Field name="Total Annual Contributions" label="Total Annual Contributions" component={Input} />
        <Field name="SDG Goals" label="SDG Goals" component={Input} />
        <Field
          name="123"
          type="range"
          min={0}
          max={50}
          rangeValue={rangeValue}
          setRangeValue={setRangeValue}
          component={RangeSlider}
          label="Revenue"
        />
      </InputContainer>
    </Content>
  );
};
