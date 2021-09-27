import React, { Dispatch, FC, SetStateAction } from 'react'

import { Container, Label, Span } from './styles'

interface BurgerButtonProps {
  state: boolean
  setState: Dispatch<SetStateAction<boolean>>
}

export const BurgerButton: FC<BurgerButtonProps> = ({ state, setState }) => (
  <Container onClick={() => setState(!state)}>
    <Label>
      <Span checked={state} />
    </Label>
  </Container>
)
