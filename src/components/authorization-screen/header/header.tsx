import { Logo } from '../../../ui/icons/logo';
import { Container, H2, LinkStyle } from './styles';
import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = memo(() => (
  <Container>
    <Link to={'/'}>
      <LinkStyle>
        <Logo />
        <H2>ACCELERIST</H2>
      </LinkStyle>
    </Link>
  </Container>
));
