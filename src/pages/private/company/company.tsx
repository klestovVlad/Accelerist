import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { CompanyMainContent } from '../../../components/board-screen/corporate-profile/company-main-content/company-main-content';
import { Header } from '../../../components/board-screen/corporate-profile/header/header';
import { Topic } from '../../../components/board-screen/topic/topic';
import { getCompanyById } from '../../../store/companies/selectors';
import {
  BackgroundContainer,
  CompanyNews,
  Container,
  Content,
  ContentSection,
} from './styles';

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
