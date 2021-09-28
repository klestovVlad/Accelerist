import {
  Content,
  Header,
  Columns,
  CardContainer,
  CardHeader,
  Card,
  CardInfo,
} from './styles';
import React, { FC } from 'react';

export const SocialImpact: FC = () => (
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
);
