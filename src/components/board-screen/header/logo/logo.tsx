import React, { FC } from 'react'

import { Container, LogoIcon, LogoLabel } from './styles'

export const Logo: FC = () => (
  <Container href="/">
    <LogoIcon />
    <LogoLabel>ACCELERIST</LogoLabel>
  </Container>
)
