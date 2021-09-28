import {
  Content,
  Header,
  CardContainer,
  Card,
  CardName,
  CardCaption,
} from './styled';
import React, { FC } from 'react';

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
