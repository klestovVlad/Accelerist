import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FavoriteListAction } from '../../../../../store/companies/index';
import { SectionHeader } from '../../section-header/section-header';
import { Card } from './card/card';
import { Content, SectionContainer } from './styles';

export const Favorites: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FavoriteListAction.favoritesRequest());
  }, []);
  return (
    <Content>
      <SectionHeader text="Favorites" isButtonShow />
      <SectionContainer>
        <Card />
        <Card />
        <Card />
        <Card />
      </SectionContainer>
    </Content>
  );
};
