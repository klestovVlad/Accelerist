import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { Bold, Container, LinkStyle, P } from './styles';

export const TermsOfServices: FC = memo(() => (
  <Container>
    <P>
      I agree that by clicking <Bold>“Registration”</Bold> I accept the{' '}
      <Link to="/">
        <LinkStyle>Terms Of Service</LinkStyle>
      </Link>
      and{' '}
      <Link to="/">
        <LinkStyle>Privacy Policy</LinkStyle>
      </Link>
    </P>
  </Container>
));
