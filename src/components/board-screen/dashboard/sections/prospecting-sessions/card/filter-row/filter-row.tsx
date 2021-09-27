import React, { FC } from 'react'

import { Content, FilterItem, FilterItemsContainer, Header } from './styles'

interface FilterRowProps {
  filters: {
    [key: string]: string
  }
  id: string
}

export const FilterRow: FC<FilterRowProps> = ({ filters, id }) => (
  <Content>
    <Header>Filters</Header>
    <FilterItemsContainer>
      {Object.keys(filters).map((item, index) => (
        <FilterItem key={id + index.toString + item}>
          {item === 'q' ? '' : `${item}: `} {filters[item]}
        </FilterItem>
      ))}
    </FilterItemsContainer>
  </Content>
)
