import { Topic } from '../topic/topic';
import { Filters } from './filters/filters';
import { Body, Content } from './styles';
import React, { FC, useState } from 'react';

export const Search: FC = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <Content>
      <Topic
        header="Search"
        showSearch
        settingState={showFilter}
        onSettingClick={setShowFilter}
      />
      <Body>{showFilter && <Filters setShowFilter={setShowFilter} />}</Body>
    </Content>
  );
};
