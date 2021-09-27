import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { SavedListSelector } from '../../../../../store/saved-list/index'
import { SectionHeader } from '../../section-header/section-header'
import { Card } from './card/card'
import { Content, SectionContainer } from './styles'

export const ProspectingSession: FC = () => {
  const SavedListItems = useSelector(SavedListSelector.selectItems)
  return (
    <Content>
      <SectionHeader text="Prospecting Sessions" isButtonShow />
      <SectionContainer>
        {SavedListItems.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </SectionContainer>
    </Content>
  )
}
