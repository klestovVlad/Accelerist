import { FC } from 'react';

import { Filters } from '../../../../../../../store/saved-list';
import { Content, FilterItem, FilterItemsContainer, Header } from './styles';

interface FilterRowProps {
  filters: Filters;
  id: string;
}

export const FilterRow: FC<FilterRowProps> = ({ filters, id }) => (
  <Content>
    <Header>Filters</Header>
    <FilterItemsContainer>
      {Object.entries(filters)
        .map((item, index) => {
          return item[1].toString().length > 0 ? (
            <FilterItem key={id + index.toString() + item}>
              {item[0] === 'q' ? '' : `${item[0]}: `} {item[1]}
            </FilterItem>
          ) : null;
        })
        .slice(0, 6)}
    </FilterItemsContainer>
  </Content>
);
