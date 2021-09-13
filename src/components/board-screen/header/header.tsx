import React, { FC, useState } from 'react';

import { BurgerButton } from '../../../ui/burger-button/burger-button';
import { AuthorizedUser } from './authorized-user/authorized-user';
import { Logo } from './logo/logo';
import { Navigation } from './navigation/navigation';
import { Search } from './search/search';
import { AdaptiveContainer, Container, NavShadow, RightSide } from './styles';

export const Header: FC = () => {
  const [state, setState] = useState(false);
  return (
    <Container>
      <Logo />

      <NavShadow checked={state} />
      <AdaptiveContainer checked={state}>
        <Navigation />
        <RightSide>
          <Search />
          <AuthorizedUser sidebarLocation={state} />
        </RightSide>
      </AdaptiveContainer>
      <BurgerButton state={state} setState={setState} />
    </Container>
  );
};
