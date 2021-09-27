import React, { Dispatch, FC, SetStateAction } from 'react'

import { Button } from '../../../../../ui/buttons/button'
import { ButtonContainer, Content } from './styles'

interface ButtonRowProps {
  handleSubmit(): void
  setShowFilter: Dispatch<SetStateAction<boolean>>
}

export const ButtonRow: FC<ButtonRowProps> = ({ handleSubmit, setShowFilter }) => (
  <Content>
    <ButtonContainer>
      <Button
        label="Cancel"
        onClick={() => setShowFilter(false)}
        type="button"
        colorScheme="white"
        isLoading={false}
        validate
      />
    </ButtonContainer>
    <ButtonContainer>
      <Button
        label="Search"
        onClick={handleSubmit}
        type="button"
        colorScheme="blue"
        isLoading={false}
        validate
      />
    </ButtonContainer>
  </Content>
)
