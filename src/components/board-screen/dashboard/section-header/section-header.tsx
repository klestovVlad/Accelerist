import React, { FC } from 'react'

import { Content, DetailButton, Header } from './styles'

interface SectionHeaderProps {
  text: string
  isButtonShow: boolean
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  text,
  isButtonShow,
}) => (
  <Content>
    <Header>{text}</Header>
    {isButtonShow ? <DetailButton>see more</DetailButton> : null}
  </Content>
)
