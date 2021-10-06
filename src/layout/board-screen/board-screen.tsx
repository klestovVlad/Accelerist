import { CompanyFavorites } from '../../pages/private/company-favorites/company-favorites';
import { CorporateProfile } from '../../pages/private/company/company';
import { Dashboard } from '../../pages/private/dashboard/dashboard';
import { Header } from '../../components/board-screen/header/header';
import { Prospects } from '../../pages/private/prospects/prospects';
import { Search } from '../../pages/private/search/search';
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
      <Route path={routes.private.prospects} component={Prospects} />
      <Redirect to={routes.private.dashboard} />
    </Switch>
  </Container>
);
