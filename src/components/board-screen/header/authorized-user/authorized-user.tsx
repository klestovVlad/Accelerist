import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'

import { UserAction } from '../../../../store/user/index'
import { Container, LogoutButton, OptionPopup, UserIcon, UserName } from './styles'

interface AuthorizedUserProps {
  sidebarLocation: boolean
}

export const AuthorizedUser: FC<AuthorizedUserProps> = ({ sidebarLocation }) => {
  const [showUserOption, setShowUserOption] = useState(false)
  const dispatch = useDispatch()
  return (
    <Container onClick={() => setShowUserOption(!showUserOption)}>
      <UserIcon />
      <UserName sidebarLocation={sidebarLocation}>No name</UserName>
      {showUserOption && (
        <OptionPopup>
          <LogoutButton onClick={() => dispatch(UserAction.logout())}>Log&#160;out</LogoutButton>
        </OptionPopup>
      )}
    </Container>
  )
}
