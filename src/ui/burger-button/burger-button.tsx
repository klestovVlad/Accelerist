import { Container, Label, Span } from './styles';
import React, { Dispatch, FC, SetStateAction } from 'react';

interface BurgerButtonProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

export const BurgerButton: FC<BurgerButtonProps> = ({ state, setState }) => (
  <Container onClick={() => setState(!state)}>
    <Label>
      <Span checked={state} />
    </Label>
  </Container>
);
