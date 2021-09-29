import { routes } from '../../../../../routes/routes';
import { getFavoritesAction } from '../../../../../store/companies/index';
import { FavoriteListSelector } from '../../../../../store/companies/index';
import { SectionHeader } from '../../section-header/section-header';
import { Card } from './card/card';
import { Content, SectionContainer } from './styles';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Favorites: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavoritesAction({ page: 1, limit: 6 }));
  }, [dispatch]);
  const FavoriteListItems = useSelector(FavoriteListSelector.selectItems);
  return (
    <Content>
      <SectionHeader
        text="Favorites"
        isButtonShow
        href={routes.private.companyFavorites}
      />
      <SectionContainer>
        {FavoriteListItems.map((item) => (
          <Card key={item.id} cardData={item} />
        ))}
      </SectionContainer>
    </Content>
  );
};
