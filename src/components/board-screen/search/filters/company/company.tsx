import { Dispatch, FC, SetStateAction } from 'react';
import { Field, FormProps } from 'react-final-form';

import { Input } from '../../../../../ui/input/input';
import LabeledMergeCustom from '../../../../../ui/range-slide/range-slide';
import { Content, Header, InputContainer, SlideContainer } from './styles';

interface CompanyProps extends FormProps {
  rangeValue: number[];
  setRangeValue: Dispatch<SetStateAction<number[]>>;
}

export const Company: FC<CompanyProps> = ({ rangeValue, setRangeValue, form }) => (
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
      <Field name="CSR Focus" label="CSR Focus" component={Input} form={form} />
      <Field
        name="Total Annual Contributions"
        label="Total Annual Contributions"
        component={Input}
        form={form}
      />
      <Field name="SDG Goals" label="SDG Goals" component={Input} form={form} />
      <SlideContainer>
        <LabeledMergeCustom rtl={false} values={rangeValue} setValues={setRangeValue} />
      </SlideContainer>
    </InputContainer>
  </Content>
);
