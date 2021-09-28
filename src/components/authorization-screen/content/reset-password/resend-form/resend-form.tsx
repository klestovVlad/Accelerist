import { Button } from '../../../../../ui/buttons/button';
import { ButtonContainer, Content, P } from './styles';
import React, { Dispatch, FC, SetStateAction } from 'react';

interface ResentFormProps {
  seconds: number;
  setSeconds: Dispatch<SetStateAction<number>>;
}

export const ResentForm: FC<ResentFormProps> = ({ seconds, setSeconds }) => {
  const onButtonClick = () => {
    setSeconds(40);
  };
  const ButtonText =
    seconds > 0 ? `00:${`0${seconds.toString()}`.slice(-2)}` : 'Resend';
  return (
    <Content>
      <P>
        A link was sent to your email to confirm password reset and create a new
        one
      </P>
      <ButtonContainer>
        <Button
          label={ButtonText}
          onClick={onButtonClick}
          colorScheme="blue"
          type="button"
          isLoading={false}
          validate={seconds === 0}
        />
      </ButtonContainer>
    </Content>
  );
};
