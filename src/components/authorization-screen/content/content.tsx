import React, { FC, useState } from 'react';
import { Route, Switch } from 'react-router';

import { Tabs } from '../../../ui/tabs/tabs';
import { Authorization } from './authorization/authorization';
import { NewPassword } from './new-password/new-password';
import { ResetPassword } from './reset-password/reset-password';
import { Container, H1 } from './styles';

export const Content: FC = () => {
  const [tabNum, setTabNum] = useState(1);
  return (
    <Container>
      <Switch>
        <Route path="/reset">
          <ResetPassword />
        </Route>
        <Route path="/new_password">
          <NewPassword />
        </Route>
        <Route path="/">
          <H1>Welcome to Accelerist</H1>
          <Tabs tabNum={tabNum} setTabNum={setTabNum} TabList={['Register', 'Login']} />
          <Authorization tabNum={tabNum} />
        </Route>
      </Switch>
    </Container>
  );
};
