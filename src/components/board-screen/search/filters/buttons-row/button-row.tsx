import React, { FC } from 'react';

import { Button } from '../../../../../ui/buttons/button';
import { ButtonContainer, Content } from './styles';

interface ButtonRowProps {
  handleSubmit(): void;
}

export const ButtonRow: FC<ButtonRowProps> = ({ handleSubmit }) => (
  <Content>
    <ButtonContainer>
      <Button label="Cancel" onClick={() => null} type="button" colorScheme="white" isLoading={false} validate />
    </ButtonContainer>
    <ButtonContainer>
      <Button label="Search" onClick={handleSubmit} type="button" colorScheme="blue" isLoading={false} validate />
    </ButtonContainer>
  </Content>
);
