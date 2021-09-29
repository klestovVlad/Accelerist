import { ReactComponent as CompanyLogo } from '../../../../../ui/icons/svg/company-large.svg';
import {
  Content,
  LogoContainer,
  PriorityContainer,
  PriorityCaption,
  PriorityInfo,
} from './styles';
import React, { FC } from 'react';

export const Logo: FC = () => (
  <Content>
    <LogoContainer>
      <CompanyLogo />
    </LogoContainer>
    <PriorityContainer>
      <PriorityCaption>Priority Ranking</PriorityCaption>
      <PriorityInfo>4</PriorityInfo>
    </PriorityContainer>
  </Content>
);
