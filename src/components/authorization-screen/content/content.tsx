import React, { FC, useState } from 'react';

import { Tabs } from '../../../ui/tubs/tubs';
import { Authorization } from './authorization/authorization';
import { Container, H1 } from './styles';

export const Content: FC = () => {
  const [tabNum, setTabNum] = useState(1);
  return (
    <Container>
      <H1>Welcome to Accelerist</H1>
      <Tabs tabNum={tabNum} setTabNum={setTabNum} TabList={['Register', 'Login']} />
      <Authorization tabNum={tabNum} />
    </Container>
  );
};
