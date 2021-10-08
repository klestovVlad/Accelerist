import { FC, useState } from 'react';
import { useLocation } from 'react-router';

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

export const Header: FC = () => {
  const [state, setState] = useState(false);
  const isSearchPage = useLocation().pathname.includes('/search');
  return (
    <BackgroundContainer>
      <Container>
        <Logo />
        <NavShadow checked={state} />
        <AdaptiveContainer checked={state}>
          <Navigation />
          <RightSide>
            {!isSearchPage && <Search />}
            <AuthorizedUser sidebarLocation={state} />
          </RightSide>
        </AdaptiveContainer>
        <BurgerButton state={state} setState={setState} />
      </Container>
    </BackgroundContainer>
  );
};
