import { FC } from 'react';

import { Info } from './info/info';
import { Logo } from './logo/logo';
import { Content } from './styles';

interface CardProps {
  name: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  revenue: string;
  id: string;
  like: boolean;
}

export const Card: FC<CardProps> = ({
  name,
  phone,
  street,
  city,
  state,
  country,
  zipCode,
  revenue,
  id,
  like,
}) => (
  <Content>
    <Logo />
    <Info
      name={name}
      phone={phone}
      street={street}
      city={city}
      state={state}
      country={country}
      zipCode={zipCode}
      revenue={revenue}
      id={id}
      like={like}
    />
  </Content>
);
