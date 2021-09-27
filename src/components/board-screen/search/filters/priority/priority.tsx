import React, { FC } from 'react'

import { PriorityRadioButtons } from '../../../../../ui/priority-radio-buttons/priority-radio-buttons'
import { Content, Header, P } from './styles'

export const Priority: FC = () => (
  <Content>
    <Header>Priority</Header>
    <P>
      Customize how important each of the following indicators are to your organization, and
      generate your own custom lead score. On a scale 1 ( least important) - 10 (most important),
      rank each attribute bellow
    </P>
    <PriorityRadioButtons
      indicatorsList={[
        'Company CRS Focus',
        'SDG Goal',
        'Total Annual Contributions',
        'Type of Partnership',
        'Geographic Location',
        'Constituent Brand Affinities',
      ]}
    />
  </Content>
)
