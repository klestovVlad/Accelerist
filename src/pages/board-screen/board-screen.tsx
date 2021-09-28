import { routes } from '../../routes/routes';
import { CorporateProfile } from '../../components/board-screen/corporate-profile/corporate-profile';
import { Dashboard } from '../../components/board-screen/dashboard/dashboard';
import { Header } from '../../components/board-screen/header/header';
import { Search } from '../../components/board-screen/search/search';
import { Container } from './styled';
import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';

export const BoardScreen: FC = () => (
  <Container>
    <Header />
    <Switch>
      <Route path={routes.private.dashboard} component={Dashboard} />
      <Route path={routes.private.search} component={Search} />
      <Route path={routes.private.company} component={CorporateProfile} />
      <Redirect to={routes.private.dashboard} />
    </Switch>
  </Container>
);
