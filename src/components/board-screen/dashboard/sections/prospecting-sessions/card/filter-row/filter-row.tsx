import { FC } from 'react';

import { cutLongText } from '../../../../../../../functions/cut-long-text';
import { Filters } from '../../../../../../../store/saved-list';
import { Content, FilterItem, FilterItemsContainer, Header } from './styles';

interface FilterRowProps {
  filters: Filters;
  id: string;
}

export const FilterRow: FC<FilterRowProps> = ({ filters, id }) => (
  <Content>
    <Header>Filters</Header>
    {filters !== null && (
      <FilterItemsContainer>
        {Object.entries(filters)
          .map((item, index) => {
            if (
              typeof item[1] != 'undefined' &&
              item[1] != null &&
              item[1].length > 0 &&
              item[0] !== 'deleteIds'
            ) {
              return (
                <FilterItem key={id + index.toString() + item}>
                  {item[0] === 'q' ? '' : `${item[0]}:`}{' '}
                  {cutLongText(item[1].toString(), 20)}
                </FilterItem>
              );
            }
          })
          .slice(0, 4)}
      </FilterItemsContainer>
    )}
  </Content>
);
