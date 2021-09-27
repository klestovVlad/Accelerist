import React, { Dispatch, FC, SetStateAction } from 'react'
import { useHistory } from 'react-router-dom'
import { ReactComponent as SearchIcon } from '../../../ui/icons/svg/search-icon.svg'
import { ReactComponent as SettingIcon } from '../../../ui/icons/svg/sliders.svg'
import { ReactComponent as BackIcon } from '../../../ui/icons/svg/back.svg'
import {
  BackgroundContent,
  ButtonContainer,
  Content,
  Header,
  IconsContainer,
  Input,
  InputContainer,
  BackButton,
} from './styles'

interface TopicProps {
  header: string
  showSearch?: boolean
  settingState?: boolean
  showBackButton?: boolean
  onSettingClick?: Dispatch<SetStateAction<boolean>>
}

export const Topic: FC<TopicProps> = ({
  header,
  onSettingClick,
  settingState,
  showSearch,
  showBackButton,
}) => {
  const history = useHistory()
  return (
    <BackgroundContent>
      <Content>
        {showBackButton && (
          <BackButton onClick={history.goBack}>
            <BackIcon />
          </BackButton>
        )}
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
  )
}
