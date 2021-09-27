import React, { FC } from 'react'

import { Container, Input, SearchButton, SearchIcon } from './styles'

export const Search: FC = () => (
  <Container>
    <Input placeholder="Search" />
    <SearchButton>
      <SearchIcon />
    </SearchButton>
  </Container>
)
