import { FC, memo } from 'react';

import { Container, Link, List, ListItem } from './styles';

export const Navigation: FC = memo(() => (
  <Container>
    <List>
      <ListItem>
        <Link to="/dashboard">Dashboard</Link>
      </ListItem>
      <ListItem>
        <Link to="/search">Search</Link>
      </ListItem>
      <ListItem>
        <Link to="/company-favorites">Favorites</Link>
      </ListItem>
      <ListItem>
        <Link to="/prospects">Prospecting</Link>
      </ListItem>
    </List>
  </Container>
));
