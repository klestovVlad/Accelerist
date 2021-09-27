import React, { FC } from 'react'

import { Content } from './content/content'
import { Header } from './header/header'
import { Container } from './styles'

export const AuthorizationScreen: FC = () => (
  <Container>
    <Header />
    <Content />
  </Container>
)
