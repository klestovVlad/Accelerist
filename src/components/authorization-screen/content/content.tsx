import React, { FC } from 'react';

import { Authorization } from './authorization/authorization';
import { Container } from './styles';

export const Content: FC = () => (
  <Container>
    <Authorization />
  </Container>
);
