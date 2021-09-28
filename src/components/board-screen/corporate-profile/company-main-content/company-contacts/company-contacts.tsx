import { ReactComponent as GlobeIcon } from '../../../../../ui/icons/svg/globe.svg';
import { ReactComponent as PlaceIcon } from '../../../../../ui/icons/svg/map-pin.svg';
import { ReactComponent as PhoneIcon } from '../../../../../ui/icons/svg/phone.svg';
import {
  Content,
  Header,
  ContactsContainer,
  Contact,
  ContactInfo,
} from './styles';
import React, { FC } from 'react';

interface CompanyContactsProps {
  website: string | null;
  phone: string | null;
  street: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  zipCode: string | null;
}

export const CompanyContacts: FC<CompanyContactsProps> = ({
  website,
  phone,
  street,
  city,
  state,
  country,
  zipCode,
}) => (
  <Content>
    <Header>Company Contacts</Header>
    <ContactsContainer>
      {website && (
        <Contact>
          <GlobeIcon />
          <ContactInfo href={`http://${website}`}>{website}</ContactInfo>
        </Contact>
      )}
      {phone && (
        <Contact>
          <PhoneIcon />
          <ContactInfo href={`tel:${phone}`}>{phone}</ContactInfo>
        </Contact>
      )}
      {(street || city || state || zipCode) && (
        <Contact>
          <PlaceIcon />
          <ContactInfo>{`${street} ${city} ${state} ${country} ${zipCode}`}</ContactInfo>
        </Contact>
      )}
    </ContactsContainer>
  </Content>
);
