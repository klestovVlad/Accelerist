import React, { FC } from 'react';

import { A, Bold, Container, P } from './styles';

export const TermsOfServices: FC = () => (
  <Container>
    <P>
      I agree that by clicking <Bold>“Registration”</Bold> I accept the <A href="/">Terms Of Service</A> and{' '}
      <A href="/">Privacy Policy</A>
    </P>
  </Container>
);
