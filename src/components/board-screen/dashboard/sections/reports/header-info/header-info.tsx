import React, { FC } from 'react'

import { Card, CardText, CardTitle, Column, Content, Header } from './styles'

export const HeaderInfo: FC = () => (
  <Content>
    <Column>
      <Header>Search Sessions</Header>
      <Card>
        <CardTitle>Total</CardTitle>
        <CardText>43</CardText>
      </Card>
    </Column>

    <Column>
      <Header>Sent Pitches</Header>
      <Card>
        <CardTitle>Company</CardTitle>
        <CardText>44</CardText>
      </Card>
    </Column>
  </Content>
)
