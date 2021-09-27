import React, { FC } from 'react'

import {
  Content,
  CompanyIcon,
  CompanyInformation,
  CompanyHeaderRow,
  CompanyName,
  CompanyCaption,
} from './styles'

import { ReactComponent as CompanyLogo } from '../../../../ui/icons/svg/company-large.svg'

interface HeaderProps {
  name: string
  caption: string | null
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
)
