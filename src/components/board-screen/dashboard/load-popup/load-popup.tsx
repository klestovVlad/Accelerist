import React, { FC } from 'react'

import { Content, LoadIcon, LoadIconContainer } from './styles'

export const LoadPopup: FC = () => (
  <Content>
    <LoadIconContainer>
      <LoadIcon />
    </LoadIconContainer>
  </Content>
)
