import { routes } from '../../../../../routes/routes';
import { getFavoritesAction } from '../../../../../store/companies/index';
import { CompaniesSelector } from '../../../../../store/companies/index';
import { Button } from '../../../../../ui/buttons/button';
import { ReactComponent as HeartIcon } from '../../../../../ui/icons/svg/big-heart.svg';
import { SectionHeader } from '../../section-header/section-header';
import { Card } from './card/card';
import {
  Content,
  SectionContainer,
  EmptyFavorites,
  EmptyFavoritesHeader,
  EmptyFavoritesCapture,
  ButtonContainer,
} from './styles';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export const Favorites: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavoritesAction({ page: 1, limit: 6 }));
  }, [dispatch]);
  const FavoriteListItems = useSelector(CompaniesSelector.selectItems);
  const history = useHistory();
  return (
    <Content>
      <SectionHeader
        text="Favorites"
        isButtonShow={FavoriteListItems.length > 0}
        href={routes.private.companyFavorites}
      />
      {FavoriteListItems.length === 0 && (
        <EmptyFavorites>
          <HeartIcon />
          <EmptyFavoritesHeader>No lists saved</EmptyFavoritesHeader>
          <EmptyFavoritesCapture>
            Go to search page and add to saved list
          </EmptyFavoritesCapture>
          <ButtonContainer>
            <Button
              label="Search"
              onClick={() => history.push('/search')}
              colorScheme="white2"
              isLoading={false}
              validate
              type="button"
            />
          </ButtonContainer>
        </EmptyFavorites>
      )}
      <SectionContainer>
        {FavoriteListItems.map((item) => (
          <Card key={item.id} cardData={item} />
        ))}
      </SectionContainer>
    </Content>
  );
};
