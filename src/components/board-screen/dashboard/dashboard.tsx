import React, { FC } from 'react';

import { Card } from './sections/prospecting-sessions/card/card';
import { SectionHeader } from './secton-header/secton-header';
import { Content, Header, SectionsContainer } from './styles';

export const Dashboard: FC = () => (
  <Content>
    <Header>Dashboard</Header>
    <SectionsContainer>
      <SectionHeader text="Prospecting Sessions" numberOfColumns={3} />
      <Card />
      <Card />
    </SectionsContainer>
  </Content>
);
