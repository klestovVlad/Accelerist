import { routes } from '../../../../routes/routes';
import { Container, LogoIcon, LogoLabel } from './styles';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const Logo: FC = () => (
  <Link to={routes.private.dashboard}>
    <Container>
      <LogoIcon />
      <LogoLabel>ACCELERIST</LogoLabel>
    </Container>
  </Link>
);
