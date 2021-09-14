import React, { FC } from 'react';

import { SectionHeader } from '../../section-header/section-header';
import { Card } from './card/card';
import { Content, GridContainer } from './styles';

export const Favorites: FC = () => (
  <Content>
    <GridContainer>
      <SectionHeader text="Favorites" isButtonShow />
      <Card />
      <Card />
      <Card />
      <Card />
    </GridContainer>
  </Content>
);
