import { SectionHeader } from '../../section-header/section-header';
import { HeaderInfo } from './header-info/header-info';
import { LastLogin } from './last-login/last-login';
import { Content, ReportsContainer } from './styles';
import { TopMatched } from './top-matched/top-matched';
import React, { FC } from 'react';

export const Reports: FC = () => (
  <Content>
    <SectionHeader text="Report" isButtonShow={false} />
    <ReportsContainer>
      <HeaderInfo />
      <TopMatched />
      <LastLogin />
    </ReportsContainer>
  </Content>
);
