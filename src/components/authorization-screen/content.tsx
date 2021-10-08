import { FC } from 'react';
import { Route, Switch } from 'react-router';

import { NewPassword } from '../../pages/public/new-password/new-password';
import { ResetPassword } from '../../pages/public/reset/reset';
import { routes } from '../../routes/routes';
import { Authorization } from './authorization/authorization';
import { Container, H1 } from './styles';

export const Content: FC = () => {
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
          <Authorization />
        </Route>
      </Switch>
    </Container>
  );
};
