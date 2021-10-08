import { FC } from 'react';

import { Content } from '../../components/authorization-screen/content';
import { Header } from '../../components/authorization-screen/header/header';
import { Container } from './styles';

export const AuthorizationScreen: FC = () => (
  <Container>
    <Header />
    <Content />
  </Container>
);
