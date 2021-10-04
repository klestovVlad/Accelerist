import {
  CompaniesSelector,
  getCompaniesAction,
} from '../../../../store/companies';
import { SavedListSelector } from '../../../../store/saved-list';
import { LoadPopup } from '../../../../ui/load-popup/load-popup';
import { Card } from '../../search/card/card';
import { Topic } from '../../topic/topic';
import { MetaRow } from './meta-row/meta-row';
import { Content, Body, BackgroundContainer, CardContainer } from './styles';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface SavedSearchProps {
  id: string;
}

export const SavedSearch: FC<SavedSearchProps> = ({ id }) => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const Listitem = useSelector(SavedListSelector.getItemById(id));

  useEffect(() => {
    dispatch(
      getCompaniesAction({
        page: page,
        limit: 12,
        income: Listitem.filters.income,
        ageRanges: Listitem.filters.ageRanges,
        gender: Listitem.filters.gender,
        q: Listitem.filters.q,
        industry: Listitem.filters.industry,
        deleteIds: Listitem.filters.deleteIds,
        csrFocusIds: Listitem.filters.csrFocusIds,
        affinities: Listitem.filters.affinities,
        location: Listitem.filters.location,
        totalAnnualContributors: Listitem.filters.totalAnnualContributors,
        revenueMin: Listitem.filters.revenueMin,
        revenueMax: Listitem.filters.revenueMax,
      })
    );
  }, [
    Listitem.filters.affinities,
    Listitem.filters.ageRanges,
    Listitem.filters.csrFocusIds,
    Listitem.filters.deleteIds,
    Listitem.filters.gender,
    Listitem.filters.income,
    Listitem.filters.industry,
    Listitem.filters.location,
    Listitem.filters.q,
    Listitem.filters.revenueMax,
    Listitem.filters.revenueMin,
    Listitem.filters.totalAnnualContributors,
    dispatch,
    page,
  ]);

  const loadState = useSelector(CompaniesSelector.selectLoadState);
  const companies = useSelector(CompaniesSelector.selectItems);
  const meta = useSelector(CompaniesSelector.selectMeta);

  return (
    <Content>
      <Topic header={Listitem.name} editable listId={id} />
      {loadState && <LoadPopup />}
      {!loadState && (
        <Body>
          <MetaRow meta={meta} setPage={setPage} />
          <BackgroundContainer>
            <CardContainer>
              {companies.map((item) => (
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
          </BackgroundContainer>
        </Body>
      )}
    </Content>
  );
};
