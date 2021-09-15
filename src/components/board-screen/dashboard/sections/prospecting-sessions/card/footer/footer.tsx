import React, { FC } from 'react';

import {
  AuthorContainer,
  AuthorImage,
  AuthorName,
  AuthorPosition,
  Content,
  LastActivityContainer,
  LastActivityHeader,
  LastActivityTime,
  UserIcon,
} from './styles';

export const Footer: FC = () => (
  <Content>
    <AuthorImage>
      <UserIcon />
    </AuthorImage>
    <AuthorContainer>
      <AuthorName>Jenny Wilson</AuthorName>
      <AuthorPosition>Owner</AuthorPosition>
    </AuthorContainer>
    <LastActivityContainer>
      <LastActivityHeader>Last Activity</LastActivityHeader>
      <LastActivityTime>1 Jul 2020</LastActivityTime>
    </LastActivityContainer>
  </Content>
);