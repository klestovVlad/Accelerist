import React, { FC } from 'react';

import { Logo } from '../../../ui/icons/logo';
import { Container, H2 } from './styles';

export const Header: FC = () => (
  <Container>
    <Logo />
    <H2>ACCELERIST</H2>
  </Container>
);
