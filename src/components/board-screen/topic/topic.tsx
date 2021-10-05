import { routes } from '../../../routes/routes';
import { deleteSavedList, updateSavedList } from '../../../store/saved-list';
import { CreateSavedList } from '../../../store/saved-list/state';
import { Button } from '../../../ui/buttons/button';
import { ReactComponent as BackIcon } from '../../../ui/icons/svg/back.svg';
import { ReactComponent as EditIcon } from '../../../ui/icons/svg/edit.svg';
import { ReactComponent as SearchIcon } from '../../../ui/icons/svg/search-icon.svg';
import { ReactComponent as SettingIcon } from '../../../ui/icons/svg/sliders.svg';
import {
  BackgroundContent,
  ButtonContainer,
  Content,
  Header,
  IconsContainer,
  Input,
  InputContainer,
  BackButton,
  EditButtonsContainer,
  Body,
  NameInput,
} from './styles';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

interface TopicProps {
  header: string;
  showSearch?: boolean;
  settingState?: boolean;
  showBackButton?: boolean;
  onSettingClick?: Dispatch<SetStateAction<boolean>>;
  onSearchClick?(): void;
  editable?: boolean;
  listId?: string;
  searchField?: string;
  setSearchField?: Dispatch<SetStateAction<string>>;
  filters?: CreateSavedList;
}

export const Topic: FC<TopicProps> = ({
  header,
  onSettingClick,
  settingState,
  showSearch,
  showBackButton,
  editable,
  listId,
  searchField,
  setSearchField,
  onSearchClick,
  filters,
}) => {
  const history = useHistory();
  const initialInput = header === null ? '' : header;
  const [name, setName] = useState(initialInput);
  const [edit, setEdit] = useState(initialInput.length === 0);
  const dispatch = useDispatch();

  const editListName = () => {
    const id = listId ? listId : 'none';
    dispatch(updateSavedList({ ...filters, id: id, name: name }));
    setEdit(false);
  };

  const deleteList = () => {
    const id = listId ? listId : 'none';
    dispatch(deleteSavedList(id));
    history.push(routes.private.prospects);
  };

  return (
    <BackgroundContent>
      <Body>
        <Content>
          {showBackButton && (
            <BackButton onClick={history.goBack}>
              <BackIcon />
            </BackButton>
          )}
          {!edit && <Header>{header}</Header>}
          {edit && (
            <NameInput
              autoFocus
              value={name}
              placeholder="No name"
              onChange={(e) => setName(e.target.value)}
            />
          )}
          {showSearch && (
            <InputContainer>
              <Input
                value={searchField}
                onChange={(e) =>
                  setSearchField ? setSearchField(e.target.value) : null
                }
              />
              <IconsContainer>
                <ButtonContainer
                  onClick={() => onSettingClick?.(!settingState)}
                >
                  <SettingIcon />
                </ButtonContainer>
                <ButtonContainer onClick={onSearchClick}>
                  <SearchIcon />
                </ButtonContainer>
              </IconsContainer>
            </InputContainer>
          )}
          {editable && (
            <>
              {!edit && (
                <EditButtonsContainer>
                  <ButtonContainer>
                    <Button
                      label="Edit"
                      onClick={() => setEdit(true)}
                      colorScheme="blueLine"
                      type="button"
                      isLoading={false}
                      validate={true}
                      Icon={EditIcon}
                    />
                  </ButtonContainer>
                  <ButtonContainer>
                    <Button
                      label="Delete"
                      onClick={() => deleteList()}
                      colorScheme="redText"
                      type="button"
                      isLoading={false}
                      validate={true}
                    />
                  </ButtonContainer>
                </EditButtonsContainer>
              )}
              {edit && (
                <EditButtonsContainer>
                  <ButtonContainer>
                    <Button
                      label="Save"
                      onClick={() => editListName()}
                      colorScheme="blueLine"
                      type="button"
                      isLoading={false}
                      validate={true}
                    />
                  </ButtonContainer>
                  <ButtonContainer>
                    <Button
                      label="Cancel"
                      onClick={() => editListName()}
                      colorScheme="redText"
                      type="button"
                      isLoading={false}
                      validate={name.length > 0}
                    />
                  </ButtonContainer>
                </EditButtonsContainer>
              )}
            </>
          )}
        </Content>
      </Body>
    </BackgroundContent>
  );
};
