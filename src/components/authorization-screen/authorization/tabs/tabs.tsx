import { FC } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../../../routes/routes';
import { Tab, TabsContainer } from './styles';

interface TubsProps {
  activeTub: number;
}

export const Tabs: FC<TubsProps> = ({ activeTub }) => (
  <TabsContainer activeTub={activeTub}>
    <Tab>
      <Link to={routes.public.signUp}>Register</Link>
    </Tab>

    <Tab>
      <Link to={routes.public.signIn}>Login</Link>
    </Tab>
  </TabsContainer>
);
