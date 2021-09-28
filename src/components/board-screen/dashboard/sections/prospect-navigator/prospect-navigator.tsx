import { SectionHeader } from '../../section-header/section-header';
import {
  Card,
  CardContainer,
  CardDate,
  CardHeader,
  CardText,
  Content,
  Image,
} from './styled';
import React, { FC } from 'react';

export const ProspectNavigator: FC = () => (
  <Content>
    <SectionHeader text="Prospect Navigator" isButtonShow />
    <CardContainer>
      <Card>
        <Image />
        <CardHeader>The Decline of Clothing Retail</CardHeader>
        <CardText>
          The apparel industry’s appeal has been dwindling for a while: “In
          1977, clothing{' '}
        </CardText>
        <CardDate>2 Sep 2020, 13:23</CardDate>
      </Card>

      <Card>
        <Image />
        <CardHeader>The Decline of Clothing Retail</CardHeader>
        <CardText>
          The apparel industry’s appeal has been dwindling for a while: “In
          1977, clothing{' '}
        </CardText>
        <CardDate>2 Sep 2020, 13:23</CardDate>
      </Card>

      <Card>
        <Image />
        <CardHeader>The Decline of Clothing Retail</CardHeader>
        <CardText>
          The apparel industry’s appeal has been dwindling for a while: “In
          1977, clothing{' '}
        </CardText>
        <CardDate>2 Sep 2020, 13:23</CardDate>
      </Card>

      <Card>
        <Image />
        <CardHeader>The Decline of Clothing Retail</CardHeader>
        <CardText>
          The apparel industry’s appeal has been dwindling for a while: “In
          1977, clothing{' '}
        </CardText>
        <CardDate>2 Sep 2020, 13:23</CardDate>
      </Card>
    </CardContainer>
  </Content>
);
