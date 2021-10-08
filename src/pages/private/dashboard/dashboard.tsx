import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Favorites } from '../../../components/board-screen/dashboard/sections/favorites/favorites';
import { ProspectingSession } from '../../../components/board-screen/dashboard/sections/prospecting-sessions/prospecting-session';
import { Reports } from '../../../components/board-screen/dashboard/sections/reports/reports';
import { Topic } from '../../../components/board-screen/topic/topic';
import { SavedListSelector } from '../../../store/saved-list';
import { getSavedListAction } from '../../../store/saved-list';
import { LoadPopup } from '../../../ui/load-popup/load-popup';
import { BackgroundContainer, Content, Row, SectionsContainer } from './styles';

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
      {loadState ? (
        <LoadPopup />
      ) : (
        !loadState && (
          <BackgroundContainer>
            <SectionsContainer>
              <ProspectingSession />
              <Row>
                <Favorites />
                <Reports />
              </Row>
            </SectionsContainer>
          </BackgroundContainer>
        )
      )}
    </Content>
  );
};
