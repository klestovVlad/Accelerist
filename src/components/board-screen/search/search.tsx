import {
  CompaniesSelector,
  getCompaniesAction,
} from '../../../store/companies';
import { FilterRequest } from '../../../store/companies/state';
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
  const [filterQuery, setFilterQuery] = useState<FilterRequest>({
    page: 1,
    limit: 12,
    income: undefined,
    ageRanges: undefined,
    gender: 'both',
    q: undefined,
    industry: undefined,
    deleteIds: undefined,
    csrFocusIds: undefined,
    affinities: undefined,
    location: undefined,
    totalAnnualContributors: undefined,
    revenueMin: undefined,
    revenueMax: undefined,
  });
  const [searchField, setSearchField] = useState('');

  const startSearch = () => {
    dispatch(
      getCompaniesAction({ ...filterQuery, page: page, q: searchField })
    );
  };

  useEffect(() => {
    dispatch(getCompaniesAction({ ...filterQuery, page: page }));
  }, [dispatch, filterQuery, page]);

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
        searchField={searchField}
        setSearchField={setSearchField}
        onSearchClick={startSearch}
      />
      {loadState && <LoadPopup />}
      {!loadState && (
        <Body>
          {showFilter && (
            <Filters
              setShowFilter={setShowFilter}
              searchField={searchField}
              setFilterQuery={setFilterQuery}
            />
          )}
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
