import { LinkStyle, Bold, Container, P } from './styles';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const TermsOfServices: FC = () => (
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
);
