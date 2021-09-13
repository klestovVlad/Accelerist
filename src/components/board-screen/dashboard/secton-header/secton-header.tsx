import React, { FC } from 'react';

import { Content, DetailButton, Header } from './styles';

interface SectionHeaderProps {
  text: string;
  numberOfColumns: number;
}

export const SectionHeader: FC<SectionHeaderProps> = ({ text, numberOfColumns }) => (
  <Content numberOfColumns={numberOfColumns}>
    <Header>{text}</Header>
    <DetailButton>see more</DetailButton>
  </Content>
);
