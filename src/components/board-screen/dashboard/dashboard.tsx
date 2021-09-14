import React, { FC } from 'react';

import { SectionHeader } from './section-header/section-header';
import { Favorites } from './sections/favorites/favorites';
import { ProspectNavigator } from './sections/prospect-navigator/prospect-navigator';
import { Card } from './sections/prospecting-sessions/card/card';
import { Reports } from './sections/reports/reports';
import { BackgroundContainer, BackgroundHeaderContainer, Content, Header, SectionsContainer } from './styles';

export const Dashboard: FC = () => (
  <Content>
    <BackgroundHeaderContainer>
      <Header>Dashboard</Header>
    </BackgroundHeaderContainer>

    <BackgroundContainer>
      <SectionsContainer>
        <SectionHeader text="Prospecting Sessions" isButtonShow />
        <Card />
        <Card />
        <Favorites />
        <Reports />
        <ProspectNavigator />
      </SectionsContainer>
    </BackgroundContainer>
  </Content>
);
