import React, { Dispatch, FC, SetStateAction } from 'react';

import { ReactComponent as SearchIcon } from '../../../ui/icons/svg/search-icon.svg';
import { ReactComponent as SettingIcon } from '../../../ui/icons/svg/sliders.svg';
import { BackgroundContent, ButtonContainer, Content, Header, IconsContainer, Input, InputContainer } from './styles';

interface TopicProps {
  header: string;
  showSearch?: boolean;
  settingState?: boolean;
  onSettingClick?: Dispatch<SetStateAction<boolean>>;
}

export const Topic: FC<TopicProps> = ({ header, onSettingClick, settingState, showSearch }) => (
  <BackgroundContent>
    <Content>
      <Header>{header}</Header>
      {showSearch && (
        <InputContainer>
          <Input />
          <IconsContainer>
            <ButtonContainer onClick={() => onSettingClick?.(!settingState)}>
              <SettingIcon />
            </ButtonContainer>
            <ButtonContainer>
              <SearchIcon />
            </ButtonContainer>
          </IconsContainer>
        </InputContainer>
      )}
    </Content>
  </BackgroundContent>
);
