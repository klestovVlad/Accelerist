import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import { MetaRow } from '../../../../components/board-screen/prospects/saved-search/meta-row/meta-row';
import { Card } from '../../../../components/board-screen/search/card/card';
import { Topic } from '../../../../components/board-screen/topic/topic';
import { CompaniesSelector, getCompaniesAction } from '../../../../store/companies';
import { SavedListSelector } from '../../../../store/saved-list';
import { LoadPopup } from '../../../../ui/load-popup/load-popup';
import { BackgroundContainer, Body, CardContainer, Content } from './styles';

export const SavedSearch: FC = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const id = useLocation().pathname.replace('/prospects/', '');

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
      }),
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
      <Topic header={Listitem.name} editable listId={id} filters={Listitem.filters} />
      {loadState ? (
        <LoadPopup />
      ) : (
        !loadState && (
          <Body>
            <MetaRow meta={meta} setPage={setPage} filters={Listitem.filters} />
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
        )
      )}
    </Content>
  );
};
