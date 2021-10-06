import { Content } from '../../components/authorization-screen/content';
import { Header } from '../../components/authorization-screen/header/header';
import { Container } from './styles';
import React, { FC } from 'react';

export const AuthorizationScreen: FC = () => (
  <Container>
    <Header />
    <Content />
  </Container>
);
