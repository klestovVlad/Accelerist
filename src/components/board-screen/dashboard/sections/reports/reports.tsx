import { getTeamAction } from '../../../../../store/team/index';
import { TeamSelector } from '../../../../../store/team/selectors';
import { SectionHeader } from '../../section-header/section-header';
import { HeaderInfo } from './header-info/header-info';
import { LastLogin } from './last-login/last-login';
import { Content, ReportsContainer } from './styles';
import { TopMatched } from './top-matched/top-matched';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Reports: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTeamAction());
  }, [dispatch]);
  const teamData = useSelector(TeamSelector.selectData);
  console.log('TeamData', teamData);
  return (
    <Content>
      <SectionHeader text="Report" isButtonShow={false} />
      <ReportsContainer>
        <HeaderInfo
          searchCount={teamData.searchCount}
          pitchCount={teamData.pitchCount}
        />
        <TopMatched />
        <LastLogin />
      </ReportsContainer>
    </Content>
  );
};
