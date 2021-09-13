import React, { FC } from 'react';

import { FilterRow } from './filter-row/filter-row';
import { Footer } from './footer/footer';
import { PeculiaritiesRow } from './peculiarities-row/peculiarities-row';
import { Container, Header, Underline } from './styles';

export const Card: FC = () => (
  <Container>
    <Header>Race for the Cure</Header>
    <Underline />
    <FilterRow />
    <PeculiaritiesRow />
    <Footer />
  </Container>
);
