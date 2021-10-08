import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { Header } from '../../components/board-screen/header/header';
import { CorporateProfile } from '../../pages/private/company/company';
import { CompanyFavorites } from '../../pages/private/company-favorites/company-favorites';
import { Dashboard } from '../../pages/private/dashboard/dashboard';
import { SavedList } from '../../pages/private/prospects/saved-list/saved-list';
import { SavedSearch } from '../../pages/private/prospects/saved-search/saved-search';
import { Search } from '../../pages/private/search/search';
import { routes } from '../../routes/routes';
import { Container } from './styled';

export const BoardScreen: FC = () => (
  <Container>
    <Header />
    <Switch>
      <Route path={routes.private.dashboard} component={Dashboard} />
      <Route path={routes.private.search} component={Search} />
      <Route path={routes.private.company} component={CorporateProfile} />
      <Route path={routes.private.companyFavorites} component={CompanyFavorites} />
      <Route exact path={routes.private.prospects} component={SavedList} />
      <Route path={routes.private.prospects} component={SavedSearch} />
      <Redirect to={routes.private.dashboard} />
    </Switch>
  </Container>
);
