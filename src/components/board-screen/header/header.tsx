import { BurgerButton } from '../../../ui/burger-button/burger-button';
import { AuthorizedUser } from './authorized-user/authorized-user';
import { Logo } from './logo/logo';
import { Navigation } from './navigation/navigation';
import { Search } from './search/search';
import {
  AdaptiveContainer,
  BackgroundContainer,
  Container,
  NavShadow,
  RightSide,
} from './styles';
import React, { FC, useState } from 'react';

export const Header: FC = () => {
  const [state, setState] = useState(false);
  return (
    <BackgroundContainer>
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
    </BackgroundContainer>
  );
};
