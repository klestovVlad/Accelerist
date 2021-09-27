import React, { FC } from 'react'

import { Content, Header, DescriptionHeader, Description } from './styles'

import { Reported } from './reported/reported'
import { CompanyTicker } from './company-ticker/company-ticker'
import { CompanyContacts } from './сompany-сontacts/сompany-сontacts'

interface CompanyMainContentProps {
  description: string
  revenue: string
  employees: number
  ticker: string | null
  website: string | null
  phone: string | null
  street: string | null
  city: string | null
  state: string | null
  country: string | null
  zipCode: string | null
}

export const CompanyMainContent: FC<CompanyMainContentProps> = ({
  description,
  revenue,
  employees,
  ticker,
  website,
  phone,
  street,
  city,
  state,
  country,
  zipCode,
}) => (
  <Content>
    <Header>Business Description Products</Header>
    <DescriptionHeader>Description</DescriptionHeader>
    <Description>{description}</Description>
    <Reported revenue={revenue} employees={employees} />
    <CompanyTicker ticker={ticker} />
    <CompanyContacts
      website={website}
      phone={phone}
      street={street}
      city={city}
      state={state}
      country={country}
      zipCode={zipCode}
    />
  </Content>
)
