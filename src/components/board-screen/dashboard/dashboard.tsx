import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SavedListAction, SavedListSelector } from '../../../store/saved-list';
import { LoadPopup } from './load-popup/load-popup';
import { Favorites } from './sections/favorites/favorites';
import { ProspectNavigator } from './sections/prospect-navigator/prospect-navigator';
import { ProspectingSession } from './sections/prospecting-sessions/prospecting-session';
import { Reports } from './sections/reports/reports';
import { BackgroundContainer, BackgroundHeaderContainer, Content, Header, Row, SectionsContainer } from './styles';

export const Dashboard: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SavedListAction.savedListRequest());
  }, []);
  const loadState = useSelector(SavedListSelector.selectLoadState);
  return (
    <Content>
      <BackgroundHeaderContainer>
        <Header>Dashboard</Header>
      </BackgroundHeaderContainer>

      {loadState && <LoadPopup />}
      {!loadState && (
        <BackgroundContainer>
          <SectionsContainer>
            <ProspectingSession />
            <Row>
              <Favorites />
              <Reports />
            </Row>
            <ProspectNavigator />
          </SectionsContainer>
        </BackgroundContainer>
      )}
    </Content>
  );
};
