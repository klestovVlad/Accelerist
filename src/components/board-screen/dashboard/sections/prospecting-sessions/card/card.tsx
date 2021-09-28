import { FilterRow } from './filter-row/filter-row';
import { Footer } from './footer/footer';
import { PeculiaritiesRow } from './peculiarities-row/peculiarities-row';
import { Container, Header, Underline } from './styles';
import React, { FC } from 'react';

interface CardProps {
  data: {
    id: string;
    name: string;
    filters: {
      q: string;
      gender: string;
    };
    prospectsAvailable: number;
    createdAt: string;
    updatedAt: string;
    lastAuthor: {
      id: string;
      email: string | null;
      firstName: string | null;
      lastName: string | null;
      isAuthorized: boolean;
      imported: boolean;
      teamId: string | null;
      role: string | null;
      linkedinLink: string | null;
      isReceivingNotifications: boolean;
      avatarKey: string | null;
      loggedInAt: string;
      createdAt: string;
      updatedAt: string;
      deletedAt: string | null;
    };
  };
}

export const Card: FC<CardProps> = ({ data }) => (
  <Container>
    <Header>{data.name}</Header>
    <Underline />
    <FilterRow filters={data.filters} id={data.id} />
    <PeculiaritiesRow prospectsAvailable={data.prospectsAvailable} />
    <Footer lastAuthor={data.lastAuthor} />
  </Container>
);
