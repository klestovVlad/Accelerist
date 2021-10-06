import { SavedList } from '../../../components/board-screen/prospects/saved-list/saved-list';
import { SavedSearch } from '../../../components/board-screen/prospects/saved-search/saved-search';
import React, { FC } from 'react';
import { useLocation } from 'react-router';

export const Prospects: FC = () => {
  const sign = useLocation().pathname.replace('/prospects', '')[0];
  const id = useLocation().pathname.replace('/prospects', '').replace('/', '');
  if (sign === '/') {
    return <SavedSearch id={id} />;
  } else {
    return <SavedList />;
  }
};
