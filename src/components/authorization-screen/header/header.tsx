import { Logo } from '../../../ui/icons/logo';
import { Container, H2, Link } from './styles';
import React, { FC } from 'react';

export const Header: FC = () => (
  <Container>
    <Link href="/">
      <Logo />
      <H2>ACCELERIST</H2>
    </Link>
  </Container>
);
