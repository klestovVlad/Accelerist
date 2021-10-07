import { Content, Header, CardContainer, Card, NoDataText } from './styles';
import React, { FC, memo } from 'react';

export const GoalAlignment: FC = memo(() => (
  <Content>
    <Header>SDG Goal Alignment</Header>
    <CardContainer>
      <Card>
        <NoDataText>No selected goal</NoDataText>
      </Card>
    </CardContainer>
  </Content>
));
