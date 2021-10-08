import { FC } from 'react';

import { Card, CardCaption, CardContainer, CardName, Content, Header } from './styled';

interface CompanyTickerProps {
  ticker: string | null;
}
export const CompanyTicker: FC<CompanyTickerProps> = ({ ticker }) => (
  <Content>
    <Header>Company Ticker</Header>
    <CardContainer>
      <Card>
        <CardName>{ticker ? ticker : 'No Information'}</CardName>
        <CardCaption></CardCaption>
      </Card>
    </CardContainer>
  </Content>
);
