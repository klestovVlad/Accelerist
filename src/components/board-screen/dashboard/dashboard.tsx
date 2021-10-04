import { SavedListSelector } from '../../../store/saved-list';
import { getSavedListAction } from '../../../store/saved-list';
import { LoadPopup } from '../../../ui/load-popup/load-popup';
import { Topic } from '../topic/topic';
import { Favorites } from './sections/favorites/favorites';
import { ProspectingSession } from './sections/prospecting-sessions/prospecting-session';
import { Reports } from './sections/reports/reports';
import { BackgroundContainer, Content, Row, SectionsContainer } from './styles';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Dashboard: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSavedListAction({ page: 1, limit: 2 }));
  }, [dispatch]);

  const loadSavedList = useSelector(SavedListSelector.selectLoadState);
  const loadState = loadSavedList;
  return (
    <Content>
      <Topic header="Dashboard" />
      {loadState && <LoadPopup />}
      {!loadState && (
        <BackgroundContainer>
          <SectionsContainer>
            <ProspectingSession />
            <Row>
              <Favorites />
              <Reports />
            </Row>
          </SectionsContainer>
        </BackgroundContainer>
      )}
    </Content>
  );
};
