import React, { FC } from 'react'
import { FavoriteListDataItems } from '../../../../../../store/companies/state'

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

import { ReactComponent as CompanyIcon } from '../../../../../../ui/icons/svg/company-small.svg'
import { useHistory } from 'react-router-dom'
interface CardProps {
  cardData: FavoriteListDataItems
}

export const Card: FC<CardProps> = ({ cardData }) => {
  const history = useHistory()
  return (
    <Content>
      <CompanyContainer>
        <Logo>
          <CompanyIcon />
        </Logo>
        <Info>
          <CompanyName onClick={() => history.push(`/company/${cardData.id}`)}>
            {cardData.name}
          </CompanyName>
          <PriorityRanking>Priority Ranking 4</PriorityRanking>
        </Info>
      </CompanyContainer>
      <CRSHeader>CSR Focus</CRSHeader>
      <CRSContainer>
        {cardData.crsFocus.map((item, index) => (
          <CRSItems key={index.toString + item}>{item}</CRSItems>
        ))}
        {cardData.crsFocus.length === 0 && <CRSItems>No information</CRSItems>}
      </CRSContainer>
    </Content>
  )
}
