import { Filters } from '../../../../../../store/saved-list';
import { Content, FilterItem, FilterItemsContainer, Header } from './styles';
import React, { FC } from 'react';

interface FilterRowProps {
  filters: Filters;
  id: string;
}

export const FilterRow: FC<FilterRowProps> = ({ filters, id }) => (
  <Content>
    <Header>Filters</Header>
    <FilterItemsContainer>
      {Object.entries(filters)
        .slice(0, 4)
        .map((item, index) => (
          <FilterItem key={id + index.toString() + item}>
            {item[0] === 'q' ? '' : `${item[0]}: `} {item[1]}
          </FilterItem>
        ))}
    </FilterItemsContainer>
  </Content>
);
