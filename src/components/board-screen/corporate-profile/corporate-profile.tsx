import { getCompanyById } from '../../../store/companies/selectors';
import { Topic } from '../topic/topic';
import { CompanyMainContent } from './company-main-content/company-main-content';
import { Header } from './header/header';
import {
  Content,
  Container,
  ContentSection,
  CompanyNews,
  BackgroundContainer,
} from './styles';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export const CorporateProfile: FC = () => {
  const companyId = useLocation().pathname.replace('/company/', '');
  const company = useSelector(getCompanyById(companyId));
  return (
    <Content>
      <Topic header="Corporate Profile" showBackButton />
      <Container>
        <BackgroundContainer>
          <Header name={company.name} caption={company.type} />
          <ContentSection>
            <CompanyMainContent
              description={company.descriptionList}
              revenue={company.revenue}
              employees={company.employeeCount}
              ticker={company.ticker}
              website={company.website}
              phone={company.phone}
              street={company.street}
              city={company.city}
              state={company.state}
              country={company.country}
              zipCode={company.zipCode}
              cashContributions={company.cashContributions}
              annualContributions={company.annualContributions}
              employeeContributions={company.employeeContributions}
              inKindContributions={company.inKindContributions}
            />
            <CompanyNews />
          </ContentSection>
        </BackgroundContainer>
      </Container>
    </Content>
  );
};
