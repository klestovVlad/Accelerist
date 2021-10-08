import { FC } from 'react';

import { ReactComponent as CompanyLogo } from '../../../../ui/icons/svg/company-large.svg';
import {
  CompanyCaption,
  CompanyHeaderRow,
  CompanyIcon,
  CompanyInformation,
  CompanyName,
  Content,
} from './styles';

interface HeaderProps {
  name: string;
  caption: string | null;
}

export const Header: FC<HeaderProps> = ({ name, caption }) => (
  <Content>
    <CompanyIcon>
      <CompanyLogo />
    </CompanyIcon>
    <CompanyInformation>
      <CompanyHeaderRow>
        <CompanyName>{name}</CompanyName>
      </CompanyHeaderRow>
      <CompanyCaption>{caption ? caption : 'No information'}</CompanyCaption>
    </CompanyInformation>
  </Content>
);
