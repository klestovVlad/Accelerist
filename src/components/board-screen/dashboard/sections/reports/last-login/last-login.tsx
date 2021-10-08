import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CheckIfNameIsEmpty } from '../../../../../../functions/check-if-name-is-empty';
import { ReturnFormattedDate } from '../../../../../../functions/return-formatted-date';
import {
  getLastLoginsAction,
  LastLoginsSelector,
} from '../../../../../../store/last-logins/index';
import {
  Content,
  DateOfVisit,
  Header,
  UserDataContainer,
  UserIcon,
  UserImage,
  UserName,
  UserRow,
} from './styled';

export const LastLogin: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLastLoginsAction());
  }, [dispatch]);

  const lastLogins = useSelector(LastLoginsSelector.selectData);

  return (
    <Content>
      <Header>Last Login</Header>
      {lastLogins.map((item) => (
        <UserRow key={item.id}>
          <UserImage>
            <UserIcon />
          </UserImage>
          <UserDataContainer>
            <UserName>
              {CheckIfNameIsEmpty(item.user.firstName, item.user.lastName)}
            </UserName>
            <DateOfVisit>
              {ReturnFormattedDate(item.loggedInAt ? item.loggedInAt : '')}
            </DateOfVisit>
          </UserDataContainer>
        </UserRow>
      ))}
    </Content>
  );
};
