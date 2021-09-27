import React, { FC } from 'react'

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
} from './styles'

import { ReturnFormattedDate } from '../../../../../../../functions/return-formatted-date'

interface FooterProps {
  lastAuthor: {
    id: string
    email: string | null
    firstName: string | null
    lastName: string | null
    isAuthorized: boolean
    imported: boolean
    teamId: string | null
    role: string | null
    linkedinLink: string | null
    isReceivingNotifications: boolean
    avatarKey: string | null
    loggedInAt: string
    createdAt: string
    updatedAt: string
    deletedAt: string | null
  }
}

export const Footer: FC<FooterProps> = ({ lastAuthor }) => {
  const ReturnAuthorName = () => {
    const firstName = lastAuthor.firstName === null ? '' : lastAuthor.firstName
    const lastName = lastAuthor.lastName === null ? '' : lastAuthor.lastName
    if (firstName.length + lastName.length === 0) {
      return 'No Name'
    }
    return `${firstName} ${lastName}`
  }

  return (
    <Content>
      <AuthorImage>
        <UserIcon />
      </AuthorImage>
      <AuthorContainer>
        <AuthorName>{ReturnAuthorName()}</AuthorName>
        <AuthorPosition>{lastAuthor.role}</AuthorPosition>
      </AuthorContainer>
      <LastActivityContainer>
        <LastActivityHeader>Last Activity</LastActivityHeader>
        <LastActivityTime>{ReturnFormattedDate(lastAuthor.updatedAt)}</LastActivityTime>
      </LastActivityContainer>
    </Content>
  )
}
