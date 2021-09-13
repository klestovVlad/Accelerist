import React, { FC } from 'react';

import { Container, UserIcon, UserName } from './styles';

interface AuthorizedUserProps {
  sidebarLocation: boolean;
}

export const AuthorizedUser: FC<AuthorizedUserProps> = ({sidebarLocation}) => (
  <Container>
    <UserIcon />
    <UserName  sidebarLocation={sidebarLocation}>No name</UserName>
  </Container>
);
