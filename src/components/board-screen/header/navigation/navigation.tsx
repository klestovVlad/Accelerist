import React, { FC } from 'react';

import { Container, Link, List, ListItem } from './styles';

export const Navigation: FC = () => (
  <Container>
    <List>
      <ListItem>
        <Link to="/">Dashboard</Link>
      </ListItem>
      <ListItem>
        <Link to="/">Audience</Link>
      </ListItem>
      <ListItem>
        <Link to="/">Pricing</Link>
      </ListItem>
      <ListItem>
        <Link to="/">Prospecting</Link>
      </ListItem>
      <ListItem>
        <Link to="/">ROI</Link>
      </ListItem>
      <ListItem>
        <Link to="/">Upgrade Membership</Link>
      </ListItem>
    </List>
  </Container>
);