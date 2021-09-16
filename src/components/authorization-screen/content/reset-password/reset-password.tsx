import React, { FC, useState } from 'react';

import { InputForm } from './input-form/input-form';
import { ResentForm } from './resend-form/resend-form';
import { Content, H1 } from './styles';

export const ResetPassword: FC = () => {
  const [seconds, setSeconds] = useState(-1);

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
  });

  return (
    <Content>
      <H1>Password Reset</H1>
      {seconds === -1 && <InputForm setSeconds={setSeconds} />}
      {seconds !== -1 && <ResentForm seconds={seconds} setSeconds={setSeconds} />}
    </Content>
  );
};
