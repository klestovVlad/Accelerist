import React, { FC } from 'react';

import { Content, QualityItem, QualityItemHeader, QualityItemText } from './styles';

export const PeculiaritiesRow: FC = () => (
  <Content>
    <QualityItem>
      <QualityItemHeader>№ of Prospects Available</QualityItemHeader>
      <QualityItemText>230</QualityItemText>
    </QualityItem>

    <QualityItem>
      <QualityItemHeader>№ of Contacts Pursued</QualityItemHeader>
      <QualityItemText>72</QualityItemText>
    </QualityItem>
  </Content>
);
