import { FC } from 'react';

import { Card, CardText, CardTitle, Column, Content, Header } from './styles';

interface HeaderInfoProps {
  searchCount: number;
  pitchCount: number;
}

export const HeaderInfo: FC<HeaderInfoProps> = ({ searchCount, pitchCount }) => (
  <Content>
    <Column>
      <Header>Search Sessions</Header>
      <Card>
        <CardTitle>Total</CardTitle>
        <CardText>{searchCount}</CardText>
      </Card>
    </Column>

    <Column>
      <Header>Sent Pitches</Header>
      <Card>
        <CardTitle>Company</CardTitle>
        <CardText>{pitchCount}</CardText>
      </Card>
    </Column>
  </Content>
);
