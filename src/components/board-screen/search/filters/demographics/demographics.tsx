import React, { FC, useState } from 'react'
import { Field, FormProps } from 'react-final-form'

import { Input } from '../../../../../ui/input/input'
import { Tabs } from '../../../../../ui/tabs/tabs'
import { Content, Header, InputContainer, TabContainer, TabHeader } from './styles'

export const Demographics: FC<FormProps> = ({ form }) => {
  const [gender, setGender] = useState(2)
  const [relations, setRelations] = useState(0)
  return (
    <Content>
      <Header>Customer Demographics</Header>
      <InputContainer>
        <TabContainer>
          <TabHeader>Gender</TabHeader>
          <Tabs tabNum={gender} setTabNum={setGender} TabList={['Male', 'Female', 'Both']} />
        </TabContainer>
        <TabContainer>
          <TabHeader>Relations</TabHeader>
          <Tabs tabNum={relations} setTabNum={setRelations} TabList={['Single', 'Married']} />
        </TabContainer>
        <Field
          name="Household Income"
          label="Household Income"
          form={form}
          predefined
          component={Input}
          predefinedList={['a', 'b', 'c']}
        />
        <Field
          name="Ethnicity"
          label="Ethnicity"
          form={form}
          predefined
          component={Input}
          predefinedList={['a', 'b', 'c', 'd']}
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
  )
}
