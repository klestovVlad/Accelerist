import React, { FC } from 'react';

import { SectionHeader } from '../../section-header/section-header';
import { Card } from './card/card';
import { Content, SectionContainer } from './styles';

export const ProspectingSession: FC = () => (
  <Content>
    <SectionHeader text="Prospecting Sessions" isButtonShow />
    <SectionContainer>
      <Card />
      <Card />
    </SectionContainer>
  </Content>
);
