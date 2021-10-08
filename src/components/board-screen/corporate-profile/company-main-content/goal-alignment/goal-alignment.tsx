import { FC, memo } from 'react';

import { Card, CardContainer, Content, Header, NoDataText } from './styles';

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
