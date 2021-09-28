import { Container, Input, SearchButton, SearchIcon } from './styles';
import React, { FC } from 'react';

export const Search: FC = () => (
  <Container>
    <Input placeholder="Search" />
    <SearchButton>
      <SearchIcon />
    </SearchButton>
  </Container>
);
