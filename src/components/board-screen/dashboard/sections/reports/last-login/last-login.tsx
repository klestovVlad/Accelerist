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
import React, { FC } from 'react';

export const LastLogin: FC = () => (
  <Content>
    <Header>Last Login</Header>
    <UserRow>
      <UserImage>
        <UserIcon />
      </UserImage>
      <UserDataContainer>
        <UserName>Frank Lampard</UserName>
        <DateOfVisit>12 Aug 2020</DateOfVisit>
      </UserDataContainer>
    </UserRow>

    <UserRow>
      <UserImage>
        <UserIcon />
      </UserImage>
      <UserDataContainer>
        <UserName>Frank Lampard</UserName>
        <DateOfVisit>12 Aug 2020</DateOfVisit>
      </UserDataContainer>
    </UserRow>

    <UserRow>
      <UserImage>
        <UserIcon />
      </UserImage>
      <UserDataContainer>
        <UserName>Frank Lampard</UserName>
        <DateOfVisit>12 Aug 2020</DateOfVisit>
      </UserDataContainer>
    </UserRow>
  </Content>
);
