import React, { FC } from 'react';

import { Content, FilterItem, FilterItemsContainer, Header } from './styles';

export const FilterRow: FC = () => (
  <Content>
    <Header>Filters</Header>
    <FilterItemsContainer>
      <FilterItem>Travel Industry</FilterItem>
      <FilterItem>$500-$1B</FilterItem>
      <FilterItem>National</FilterItem>
    </FilterItemsContainer>
  </Content>
);
