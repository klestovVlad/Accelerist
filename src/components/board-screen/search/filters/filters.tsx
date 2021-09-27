import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { Form } from 'react-final-form'

import { Tabs } from '../../../../ui/tabs/tabs'
import { ButtonRow } from './buttons-row/button-row'
import { Company } from './company/company'
import { Demographics } from './demographics/demographics'
import { Priority } from './priority/priority'
import { Container, Content, Header } from './styles'

interface FilterProps {
  setShowFilter: Dispatch<SetStateAction<boolean>>
}

export const Filters: FC<FilterProps> = ({ setShowFilter }) => {
  const [tabNum, setTabNum] = useState(0)
  const [rangeValue, setRangeValue] = useState<Array<number>>([0, 50])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmitForm = (values: any) => {
    console.log(values, 'range', rangeValue)
  }
  return (
    <Content>
      <Header>Filters</Header>
      <Tabs
        tabNum={tabNum}
        setTabNum={setTabNum}
        TabList={['Advanced', 'Customize']}
      />

      <Form
        onSubmit={onSubmitForm}
        mutators={{
          setValue: ([field, value], state, { changeValue }) => {
            changeValue(state, field, () => value)
          },
        }}
        render={({ form, values, handleSubmit }) => (
          <Container>
            {tabNum === 1 && <Priority />}
            <Company
              onSubmit={onSubmitForm}
              values={values}
              rangeValue={rangeValue}
              setRangeValue={setRangeValue}
              form={form}
            />
            <Demographics onSubmit={onSubmitForm} form={form} />
            <ButtonRow
              handleSubmit={handleSubmit}
              setShowFilter={setShowFilter}
            />
          </Container>
        )}
      />
    </Content>
  )
}
