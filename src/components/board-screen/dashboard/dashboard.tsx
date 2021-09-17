import React, { FC } from 'react';

import { Favorites } from './sections/favorites/favorites';
import { ProspectNavigator } from './sections/prospect-navigator/prospect-navigator';
import { ProspectingSession } from './sections/prospecting-sessions/prospecting-session';
import { Reports } from './sections/reports/reports';
import { BackgroundContainer, BackgroundHeaderContainer, Content, Header, Row, SectionsContainer } from './styles';

export const Dashboard: FC = () => (
  <Content>
    <BackgroundHeaderContainer>
      <Header>Dashboard</Header>
    </BackgroundHeaderContainer>

    <BackgroundContainer>
      <SectionsContainer>
        <ProspectingSession />
        <Row>
          <Favorites />
          <Reports />
        </Row>
        <ProspectNavigator />
      </SectionsContainer>
    </BackgroundContainer>
  </Content>
);
