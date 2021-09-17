import React, { FC } from 'react';

import { SectionHeader } from '../../section-header/section-header';
import { Card } from './card/card';
import { Content, SectionContainer } from './styles';

export const Favorites: FC = () => (
  <Content>
    <SectionHeader text="Favorites" isButtonShow />
    <SectionContainer>
      <Card />
      <Card />
      <Card />
      <Card />
    </SectionContainer>
  </Content>
);
