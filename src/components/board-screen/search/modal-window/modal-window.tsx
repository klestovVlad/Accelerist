import { Dispatch, FC, SetStateAction } from 'react';

import { Button } from '../../../../ui/buttons/button';
import { ReactComponent as SettingIcon } from '../../../../ui/icons/svg/setting-big.svg';
import {
  BackgroundShadow,
  ButtonContainer,
  Capture,
  ImageRow,
  Message,
  ModalContainer,
  TextRow,
} from './styles';

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
