import React, { FC } from 'react'

import {
  CompanyContainer,
  CompanyName,
  Content,
  CRSContainer,
  CRSHeader,
  CRSItems,
  Info,
  Logo,
  PriorityRanking,
} from './style'

export const Card: FC = () => (
  <Content>
    <CompanyContainer>
      <Logo />
      <Info>
        <CompanyName>NASA</CompanyName>
        <PriorityRanking>Priority Ranking 12</PriorityRanking>
      </Info>
    </CompanyContainer>
    <CRSHeader>CSR Focus</CRSHeader>
    <CRSContainer>
      <CRSItems>Health</CRSItems>
      <CRSItems>Animals</CRSItems>
      <CRSItems>Education</CRSItems>
    </CRSContainer>
  </Content>
)
