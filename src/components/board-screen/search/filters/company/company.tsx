import React, { Dispatch, FC, SetStateAction } from 'react'
import { Field, FormProps } from 'react-final-form'

import { Input } from '../../../../../ui/input/input'
import { RangeSlider } from '../../../../../ui/range-slider/range-slider'
import { Content, Header, InputContainer } from './styles'

interface CompanyProps extends FormProps {
  rangeValue: number[]
  setRangeValue: Dispatch<SetStateAction<number[]>>
}

export const Company: FC<CompanyProps> = ({
  rangeValue,
  setRangeValue,
  form,
}) => (
  <Content>
    <Header>Company</Header>
    <InputContainer>
      <Field name="Industry" label="Industry" component={Input} form={form} />
      <Field
        name="Geographic Location"
        label="Geographic Location"
        component={Input}
        form={form}
      />
      <Field name="CSR Focus" label="CSR Focus" component={Input} />
      <Field
        name="Total Annual Contributions"
        label="Total Annual Contributions"
        component={Input}
        form={form}
      />
      <Field name="SDG Goals" label="SDG Goals" component={Input} form={form} />
      <Field
        form={form}
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
)
