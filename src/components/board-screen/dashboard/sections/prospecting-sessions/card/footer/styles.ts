import styled from 'styled-components'

import { ReactComponent as UserSvg } from '../../../../../../../ui/icons/svg/user.svg'

export const Content = styled.div`
  margin-top: 24px;
  display: flex;
`

export const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 12px;
`

export const AuthorImage = styled.div`
  background-color: ${(props) => props.theme.colors.secondary_blue};
  width: 40px;
  padding-top: 40px;
  border-radius: 50%;
  position: relative;
`

export const AuthorName = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.black};
`

export const AuthorPosition = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_gray};
`

export const LastActivityContainer = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`

export const LastActivityHeader = styled.p`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_gray};
`

export const LastActivityTime = styled.p`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.black};
`

export const UserIcon = styled(UserSvg)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
