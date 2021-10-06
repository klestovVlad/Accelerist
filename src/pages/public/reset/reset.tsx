import { InputForm } from '../../../components/authorization-screen/reset-password/input-form/input-form';
import { ResentForm } from '../../../components/authorization-screen/reset-password/resend-form/resend-form';
import { Button } from '../../../ui/buttons/button';
import { ButtonContainer, Content, H1 } from './styles';
import React, { FC, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const ResetPassword: FC = () => {
  const [seconds, setSeconds] = useState(0);
  const history = useHistory();
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = +setInterval(() => {
      setSeconds((state) => state - 1);
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [seconds]);

  useEffect(() => {
    if (seconds <= 0 && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [seconds]);

  return (
    <Content>
      <H1>Password Reset</H1>
      {seconds <= 0 ? (
        <InputForm setSeconds={setSeconds} />
      ) : (
        <ResentForm seconds={seconds} setSeconds={setSeconds} />
      )}
      <ButtonContainer>
        <Button
          label="Return to Login"
          onClick={() => history.push('/login')}
          colorScheme="darkTransparent"
          type="button"
          isLoading={false}
          validate
        />
      </ButtonContainer>
    </Content>
  );
};
