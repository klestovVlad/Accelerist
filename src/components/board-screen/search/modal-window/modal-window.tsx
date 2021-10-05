import { Button } from '../../../../ui/buttons/button';
import { ReactComponent as SettingIcon } from '../../../../ui/icons/svg/setting-big.svg';
import {
  ModalContainer,
  BackgroundShadow,
  ImageRow,
  TextRow,
  Message,
  Capture,
  ButtonContainer,
} from './styles';
import React, { Dispatch, FC, SetStateAction } from 'react';

interface ModalWindowProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const ModalWindow: FC<ModalWindowProps> = ({ setShowModal }) => (
  <BackgroundShadow>
    <ModalContainer>
      <ImageRow>
        <SettingIcon />
      </ImageRow>
      <TextRow>
        <Message>This list cannot be saved.</Message>
        <Capture>Please set up filters.</Capture>
        <ButtonContainer>
          <Button
            label="ok"
            onClick={() => setShowModal(false)}
            colorScheme={'blueLine'}
            type="button"
            isLoading={false}
            validate={true}
          />
        </ButtonContainer>
      </TextRow>
    </ModalContainer>
  </BackgroundShadow>
);
