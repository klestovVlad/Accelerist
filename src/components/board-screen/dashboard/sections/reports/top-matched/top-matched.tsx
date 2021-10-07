import { ReactComponent as LinkIcon } from '../../../../../../ui/icons/svg/go-forward.svg';
import {
  LinkContainer,
  LinkText,
  CompanyLogoContainer,
  Content,
  Header,
} from './styled';
import React, { FC, memo } from 'react';

export const TopMatched: FC = memo(() => (
  <Content>
    <Header>Prospect Navigator</Header>
    <CompanyLogoContainer>
      <LinkContainer href="https://accelerist.com/insights-2/" target="_blank">
        <LinkText>Go to page</LinkText>
        <LinkIcon />
      </LinkContainer>
    </CompanyLogoContainer>
  </Content>
));
