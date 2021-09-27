import React, { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router'

import { Dashboard } from './dashboard/dashboard'
import { Header } from './header/header'
import { Search } from './search/search'
import { CorporateProfile } from './corporate-profile/corporate-profile'
import { Container } from './styled'

export const BoardScreen: FC = () => (
  <Container>
    <Header />
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/search" component={Search} />
      <Route path="/company" component={CorporateProfile} />
      <Redirect to="/dashboard" />
    </Switch>
  </Container>
)
