import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from '../../../components/board-screen/company-favorites/card/card';
import { MetaRow } from '../../../components/board-screen/company-favorites/meta-row/meta-row';
import { Topic } from '../../../components/board-screen/topic/topic';
import { CompaniesSelector, getFavoritesAction } from '../../../store/companies/index';
import { LoadPopup } from '../../../ui/load-popup/load-popup';
import { Body, CardContainer, Content } from './styles';

export const CompanyFavorites: FC = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getFavoritesAction({ page: page, limit: 12 }));
  }, [dispatch, page]);

  const favoriteListItems = useSelector(CompaniesSelector.selectItems);

  const meta = useSelector(CompaniesSelector.selectMeta);
  console.log(meta);
  const loadState = useSelector(CompaniesSelector.selectLoadState);
  return (
    <Content>
      <Topic header="Favorites" />

      {loadState ? (
        <LoadPopup />
      ) : (
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
