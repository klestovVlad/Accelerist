import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from '../../../../components/board-screen/dashboard/sections/prospecting-sessions/card/card';
import { MetaRow } from '../../../../components/board-screen/prospects/saved-list/meta-row/meta-row';
import { getSavedListAction, SavedListSelector } from '../../../../store/saved-list';
import { ReactComponent as CompanyIcon } from '../../../../ui/icons/svg/company-large.svg';
import { LoadPopup } from '../../../../ui/load-popup/load-popup';
import {
  BackgroundContainer,
  CardContainer,
  Container,
  Content,
  EmptyListCaption,
  EmptyListItem,
} from './styles';

export const SavedList: FC = () => {
  const [page, setPage] = useState(1);
  const [sortNum, setSortNum] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const sortTypes = ['alphabet', 'last-activity', 'available'] as const;
    dispatch(
      getSavedListAction({
        page: page,
        limit: 12,
        sort: sortTypes[sortNum - 1],
      }),
    );
  }, [dispatch, page, sortNum]);

  const loadState = useSelector(SavedListSelector.selectLoadState);
  const meta = useSelector(SavedListSelector.selectMeta);
  const SavedListItems = useSelector(SavedListSelector.selectItems);
  return (
    <Content>
      {loadState ? (
        <LoadPopup />
      ) : (
        <Container>
          <BackgroundContainer>
            <MetaRow
              meta={meta}
              setPage={setPage}
              sortNum={sortNum}
              setSortNum={setSortNum}
            />
            {SavedListItems.length === 0 && (
              <EmptyListItem>
                <CompanyIcon />
                <EmptyListCaption>No lists</EmptyListCaption>
              </EmptyListItem>
            )}
            <CardContainer>
              {SavedListItems.map((item) => (
                <Card key={item.id} data={item} />
              ))}
            </CardContainer>
          </BackgroundContainer>
        </Container>
      )}
    </Content>
  );
};
