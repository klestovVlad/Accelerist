import { CompanyFavorites } from '../../components/board-screen/company-favirites/company-favirites';
import { CorporateProfile } from '../../components/board-screen/corporate-profile/corporate-profile';
import { Dashboard } from '../../components/board-screen/dashboard/dashboard';
import { Header } from '../../components/board-screen/header/header';
import { Search } from '../../components/board-screen/search/search';
import { routes } from '../../routes/routes';
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
      <Route
        path={routes.private.companyFavorites}
        component={CompanyFavorites}
      />
      <Redirect to={routes.private.dashboard} />
    </Switch>
  </Container>
);
