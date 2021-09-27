import React, { FC } from 'react'

import { CompanyLogo, CompanyLogoContainer, Content, Header } from './styled'

export const TopMatched: FC = () => (
  <Content>
    <Header>Top Matched</Header>
    <CompanyLogoContainer>
      <CompanyLogo />
      <CompanyLogo />
      <CompanyLogo />
      <CompanyLogo />
    </CompanyLogoContainer>
  </Content>
)
