import { Container, LogoIcon, LogoLabel } from './styles';
import React, { FC } from 'react';

export const Logo: FC = () => (
  <Container href="/">
    <LogoIcon />
    <LogoLabel>ACCELERIST</LogoLabel>
  </Container>
);
