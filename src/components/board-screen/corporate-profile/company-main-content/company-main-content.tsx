import { CompanyContacts } from './company-contacts/company-contacts';
import { CompanyTicker } from './company-ticker/company-ticker';
import { Contributions } from './contributions/contributions';
import { GoalAlignment } from './goal-alignment/goal-alignment';
import { GriCompliant } from './gri-compliant/gri-compliant';
import { Reported } from './reported/reported';
import { SocialImpact } from './social-impact/social-impact';
import { Content, Header, DescriptionHeader, Description } from './styles';
import React, { FC } from 'react';

interface CompanyMainContentProps {
  description: string;
  revenue: string;
  employees: number;
  ticker: string | null;
  website: string | null;
  phone: string | null;
  street: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  zipCode: string | null;
  cashContributions: string | null;
  annualContributions: string | null;
  employeeContributions: string | null;
  inKindContributions: string | null;
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
  cashContributions,
  annualContributions,
  employeeContributions,
  inKindContributions,
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
    <SocialImpact />
    <GoalAlignment />
    <Contributions
      cashContributions={cashContributions}
      annualContributions={annualContributions}
      employeeContributions={employeeContributions}
      inKindContributions={inKindContributions}
    />
    <GriCompliant />
  </Content>
);
