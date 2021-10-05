import { Input } from '../../../../../ui/input/input';
import { Tabs } from '../../../../../ui/tabs/tabs';
import {
  Content,
  Header,
  InputContainer,
  TabContainer,
  TabHeader,
} from './styles';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { Field, FormProps } from 'react-final-form';

interface DemographicsProps extends FormProps {
  gender: number;
  setGender: Dispatch<SetStateAction<number>>;
}

export const Demographics: FC<DemographicsProps> = ({
  form,
  gender,
  setGender,
}) => {
  const [relations, setRelations] = useState(0);
  return (
    <Content>
      <Header>Customer Demographics</Header>
      <InputContainer>
        <TabContainer>
          <TabHeader>Gender</TabHeader>
          <Tabs
            tabNum={gender}
            setTabNum={setGender}
            TabList={['Male', 'Female', 'Both']}
          />
        </TabContainer>
        <TabContainer>
          <TabHeader>Relations</TabHeader>
          <Tabs
            tabNum={relations}
            setTabNum={setRelations}
            TabList={['Single', 'Married']}
          />
        </TabContainer>
        <Field
          name="Household Income"
          label="Household Income"
          form={form}
          predefined
          component={Input}
          predefinedList={[
            'Less than $20k',
            '$20k - $29k',
            '$30k - $39k',
            '$40k - $49k',
            '$50k - $74k',
            '$75k - $99k',
            '$100k - $124k',
            '$125k or More',
          ]}
        />
        <Field
          name="Ethnicity"
          label="Ethnicity"
          form={form}
          predefined
          component={Input}
          predefinedList={['African American', 'Asian', 'Hispanic', 'White']}
        />
        <Field
          name="Age"
          label="Age"
          form={form}
          predefined
          component={Input}
          predefinedList={[
            '18-20',
            '21-25',
            '26-30',
            '31-35',
            '36-40',
            '41-45',
            '46-50',
            '51-55',
            '56-60',
            '61-65',
            '66-70',
            '71-75',
            '75 +',
          ]}
        />
      </InputContainer>
    </Content>
  );
};
