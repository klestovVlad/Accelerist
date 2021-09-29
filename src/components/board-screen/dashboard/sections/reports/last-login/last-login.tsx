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
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const LastLogin: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLastLoginsAction());
  }, [dispatch]);

  const lastLogins = useSelector(LastLoginsSelector.selectData);

  const ReturnAuthorName = (
    firstName: string | null,
    lastName: string | null
  ) => {
    const firstNameResult = firstName === null ? '' : firstName;
    const lastNameResult = lastName === null ? '' : lastName;
    if (firstNameResult.length + lastNameResult.length === 0) {
      return 'No Name';
    }
    return `${firstNameResult} ${lastNameResult}`;
  };

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
              {ReturnAuthorName(item.user.firstName, item.user.lastName)}
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
