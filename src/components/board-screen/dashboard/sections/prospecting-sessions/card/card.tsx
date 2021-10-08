import { FC } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../../../../../routes/routes';
import { Filters } from '../../../../../../store/saved-list';
import { FilterRow } from './filter-row/filter-row';
import { Footer } from './footer/footer';
import { PeculiaritiesRow } from './peculiarities-row/peculiarities-row';
import { Container, Header, Underline } from './styles';

interface CardProps {
  data: {
    id: string;
    name: string;
    filters: Filters;
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

export const Card: FC<CardProps> = ({ data }) => {
  const cardName = data.name ? data.name : 'No Name';
  return (
    <Container>
      <Link to={`${routes.private.prospects}/${data.id}`}>
        <Header>{cardName}</Header>
      </Link>

      <Underline />
      <FilterRow filters={data.filters} id={data.id} />
      <PeculiaritiesRow prospectsAvailable={data.prospectsAvailable} />
      <Footer lastAuthor={data.lastAuthor} />
    </Container>
  );
};
