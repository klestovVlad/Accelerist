import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../../../routes/routes';
import { Container, LogoIcon, LogoLabel } from './styles';

export const Logo: FC = memo(() => (
  <Link to={routes.private.dashboard}>
    <Container>
      <LogoIcon />
      <LogoLabel>ACCELERIST</LogoLabel>
    </Container>
  </Link>
));
