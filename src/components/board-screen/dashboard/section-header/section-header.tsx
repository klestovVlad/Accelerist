import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Content, DetailButton, Header } from './styles';

interface SectionHeaderProps {
  text: string;
  isButtonShow: boolean;
  href?: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({ text, isButtonShow, href }) => (
  <Content>
    <Header>{text}</Header>
    {isButtonShow ? (
      <Link to={href ? href : '/'}>
        <DetailButton>see more</DetailButton>
      </Link>
    ) : null}
  </Content>
);
