import { CheckIfNameIsEmpty } from '../../../../../../../functions/check-if-name-is-empty';
import { ReturnFormattedDate } from '../../../../../../../functions/return-formatted-date';
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
import React, { FC } from 'react';

interface FooterProps {
  lastAuthor: {
    id: string;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    isAuthorized: boolean;
    imported: boolean;
    teamId: string | null;
    role: string | null;
    linkedinLink: string | null;
    isReceivingNotifications: boolean;
    avatarKey: string | null;
    loggedInAt: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  };
}

export const Footer: FC<FooterProps> = ({ lastAuthor }) => {
  return (
    <Content>
      <AuthorImage>
        <UserIcon />
      </AuthorImage>
      <AuthorContainer>
        <AuthorName>
          {CheckIfNameIsEmpty(lastAuthor.firstName, lastAuthor.lastName)}
        </AuthorName>
        <AuthorPosition>{lastAuthor.role}</AuthorPosition>
      </AuthorContainer>
      <LastActivityContainer>
        <LastActivityHeader>Last Activity</LastActivityHeader>
        <LastActivityTime>
          {ReturnFormattedDate(lastAuthor.updatedAt)}
        </LastActivityTime>
      </LastActivityContainer>
    </Content>
  );
};
