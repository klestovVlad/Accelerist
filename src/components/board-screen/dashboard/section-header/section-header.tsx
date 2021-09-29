import { Content, DetailButton, Header } from './styles';
import React, { FC } from 'react';

interface SectionHeaderProps {
  text: string;
  isButtonShow: boolean;
  href?: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  text,
  isButtonShow,
  href,
}) => (
  <Content>
    <Header>{text}</Header>
    {isButtonShow ? <DetailButton href={href}>see more</DetailButton> : null}
  </Content>
);
