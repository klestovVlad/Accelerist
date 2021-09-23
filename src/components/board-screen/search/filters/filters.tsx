import React, { FC, useState } from 'react';
import { Form } from 'react-final-form';

import { Tabs } from '../../../../ui/tabs/tabs';
import { ButtonRow } from './buttons-row/button-row';
import { Company } from './company/company';
import { Demographics } from './demographics/demographics';
import { Priority } from './priority/priority';
import { Container, Content, Header } from './styles';

export const Filters: FC = () => {
  const [tabNum, setTabNum] = useState(0);
  const onSubmitForm = (values: any) => {
    console.log(values);
  };
  return (
    <Content>
      <Header>Filters</Header>
      <Tabs tabNum={tabNum} setTabNum={setTabNum} TabList={['Advanced', 'Customize']} />

      <Form
        onSubmit={onSubmitForm}
        render={({ values, handleSubmit }) => (
          <Container>
            {tabNum === 1 && <Priority />}
            <Company onSubmit={onSubmitForm} values={values} />
            <Demographics />
            <ButtonRow handleSubmit={handleSubmit} />
          </Container>
        )}
      />
    </Content>
  );
};
