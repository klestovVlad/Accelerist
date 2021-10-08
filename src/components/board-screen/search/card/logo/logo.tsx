import { FC, memo } from 'react';

import { ReactComponent as CompanyLogo } from '../../../../../ui/icons/svg/company-large.svg';
import {
  Content,
  LogoContainer,
  PriorityCaption,
  PriorityContainer,
  PriorityInfo,
} from './styles';

export const Logo: FC = memo(() => (
  <Content>
    <LogoContainer>
      <CompanyLogo />
    </LogoContainer>
    <PriorityContainer>
      <PriorityCaption>Priority Ranking</PriorityCaption>
      <PriorityInfo>4</PriorityInfo>
    </PriorityContainer>
  </Content>
));
