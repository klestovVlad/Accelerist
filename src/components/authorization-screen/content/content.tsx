import { routes } from '../../../routes/routes';
import { Tabs } from '../../../ui/tabs/tabs';
import { Authorization } from './authorization/authorization';
import { NewPassword } from './new-password/new-password';
import { ResetPassword } from './reset-password/reset-password';
import { Container, H1 } from './styles';
import React, { FC, useState } from 'react';
import { Route, Switch } from 'react-router';

export const Content: FC = () => {
  const [tabNum, setTabNum] = useState(1);
  return (
    <Container>
      <Switch>
        <Route path={routes.public.resetPassword}>
          <ResetPassword />
        </Route>
        <Route path={routes.public.newPassword}>
          <NewPassword />
        </Route>
        <Route path="/">
          <H1>Welcome to Accelerist</H1>
          <Tabs
            tabNum={tabNum}
            setTabNum={setTabNum}
            TabList={['Register', 'Login']}
          />
          <Authorization tabNum={tabNum} />
        </Route>
      </Switch>
    </Container>
  );
};
