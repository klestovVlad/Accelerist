import {
  CompaniesSelector,
  getFavoritesAction,
} from '../../../store/companies/index';
import { LoadPopup } from '../../../ui/load-popup/load-popup';
import { Topic } from '../topic/topic';
import { Card } from './card/card';
import { MetaRow } from './meta-row/meta-row';
import { Content, Body, CardContainer } from './styles';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const CompanyFavorites: FC = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getFavoritesAction({ page: page, limit: 12 }));
  }, [dispatch, page]);

  const favoriteListItems = useSelector(CompaniesSelector.selectItems);
  const meta = useSelector(CompaniesSelector.selectMeta);
  const loadState = useSelector(CompaniesSelector.selectLoadState);
  
  return (
    <Content>
      <Topic header="Favorites" />

      {loadState && <LoadPopup />}
      {!loadState && (
        <Body>
          <MetaRow
            totalItems={meta.totalItems}
            itemsPerPage={meta.itemsPerPage}
            currentPage={meta.currentPage}
            setPage={setPage}
            totalPages={meta.totalPages}
            itemCount={meta.itemCount}
          />
          <CardContainer>
            {favoriteListItems.map((item) => (
              <Card
                key={item.id}
                name={item.name}
                phone={item.phone}
                street={item.street}
                city={item.city}
                state={item.state}
                country={item.country}
                zipCode={item.zipCode}
                revenue={item.revenue}
                id={item.id}
                like={item.like}
              />
            ))}
          </CardContainer>
        </Body>
      )}
    </Content>
  );
};
