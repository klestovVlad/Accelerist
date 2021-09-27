import React, { FC } from 'react'

import {
  Content,
  QualityItem,
  QualityItemHeader,
  QualityItemText,
} from './styles'

interface PeculiaritiesRowProps {
  prospectsAvailable: number
}

export const PeculiaritiesRow: FC<PeculiaritiesRowProps> = ({
  prospectsAvailable,
}) => (
  <Content>
    <QualityItem>
      <QualityItemHeader>№ of Prospects Available</QualityItemHeader>
      <QualityItemText>{prospectsAvailable}</QualityItemText>
    </QualityItem>

    <QualityItem>
      <QualityItemHeader>№ of Contacts Pursued</QualityItemHeader>
      <QualityItemText>--</QualityItemText>
    </QualityItem>
  </Content>
)
