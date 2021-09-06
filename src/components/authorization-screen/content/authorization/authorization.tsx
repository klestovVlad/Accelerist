import React, { FC, useState } from 'react';

import { Tabs } from '../../../../ui/tubs/tubs';
import { H1 } from './styled';

export const Authorization: FC = () => {
  const [tabNum, settabNum] = useState(1);
  return (
    <>
      <H1>Welcome to Accelerist</H1>
      <Tabs tabNum={tabNum} settabNum={settabNum} TabList={['Register', 'Login']} />
    </>
  );
};
