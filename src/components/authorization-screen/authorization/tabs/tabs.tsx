import { routes } from '../../../../routes/routes';
import { TabsContainer, Tab } from './styles';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

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
