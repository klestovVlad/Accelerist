import React, { FC } from 'react';

import { Filters } from './filters/filters';
import { BackgroundHeaderContainer, Body, Content, Header } from './styles';

export const Search: FC = () => (
  <Content>
    <BackgroundHeaderContainer>
      <Header>Search</Header>
    </BackgroundHeaderContainer>
    <Body>
      <Filters />
    </Body>
  </Content>
);
