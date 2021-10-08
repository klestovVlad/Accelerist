import { FC, memo } from 'react';

import {
  Card,
  CardContainer,
  CardHeader,
  CardInfo,
  Columns,
  Content,
  Header,
} from './styles';

export const SocialImpact: FC = memo(() => (
  <Content>
    <Header>Social Impact</Header>
    <Columns>
      <CardContainer>
        <CardHeader>Type of Investment</CardHeader>
        <Card>
          <CardInfo>No Information</CardInfo>
        </Card>
      </CardContainer>
      <CardContainer>
        <CardHeader>CSR Focus</CardHeader>
        <Card>
          <CardInfo>No Information</CardInfo>
        </Card>
      </CardContainer>
    </Columns>
  </Content>
));
