import {
  CompaniesSelector,
  getCompaniesAction,
} from '../../../store/companies';
import { LoadPopup } from '../../../ui/load-popup/load-popup';
import { Topic } from '../topic/topic';
import { Card } from './card/card';
import { Filters } from './filters/filters';
import { MetaRow } from './meta-row/meta-row';
import { Body, Content, CardContainer } from './styles';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Search: FC = () => {
  const [showFilter, setShowFilter] = useState(false);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getCompaniesAction({ page: page, limit: 12 }));
  }, [dispatch, page]);
  const Companies = useSelector(CompaniesSelector.selectItems);
  const meta = useSelector(CompaniesSelector.selectMeta);
  const loadState = useSelector(CompaniesSelector.selectLoadState);
  return (
    <Content>
      <Topic
        header="Search"
        showSearch
        settingState={showFilter}
        onSettingClick={setShowFilter}
      />
      {loadState && <LoadPopup />}
      {!loadState && (
        <Body>
          {showFilter && <Filters setShowFilter={setShowFilter} />}
          <MetaRow meta={meta} setPage={setPage} />
          <CardContainer>
            {Companies.map((item) => (
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
