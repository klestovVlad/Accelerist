import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { routes } from '../../../../../routes/routes';
import { SavedListSelector } from '../../../../../store/saved-list/index';
import { Button } from '../../../../../ui/buttons/button';
import { ReactComponent as FolderIcon } from '../../../../../ui/icons/svg/big-folder.svg';
import { SectionHeader } from '../../section-header/section-header';
import { Card } from './card/card';
import {
  ButtonContainer,
  Content,
  EmptyListCapture,
  EmptyListHeader,
  EmptyListSaved,
  SectionContainer,
} from './styles';

export const ProspectingSession: FC = () => {
  const history = useHistory();
  const SavedListItems = useSelector(SavedListSelector.selectItems);
  return (
    <Content>
      <SectionHeader
        text="Prospecting Sessions"
        isButtonShow
        href={routes.private.prospects}
      />
      <SectionContainer>
        {SavedListItems.length === 0 && (
          <EmptyListSaved>
            <FolderIcon />
            <EmptyListHeader>No lists saved</EmptyListHeader>
            <EmptyListCapture>Go to search page and add to saved list</EmptyListCapture>
            <ButtonContainer>
              <Button
                label="Search"
                onClick={() => history.push('/search')}
                colorScheme="blueLine"
                isLoading={false}
                validate
                type="button"
              />
            </ButtonContainer>
          </EmptyListSaved>
        )}
        {SavedListItems.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </SectionContainer>
    </Content>
  );
};
