import React, { Dispatch, FC, SetStateAction } from 'react'

import { Container, Selection, Tab } from './styles'

interface TabsProps {
  tabNum: number
  setTabNum: Dispatch<SetStateAction<number>>
  TabList: Array<string>
}

export const Tabs: FC<TabsProps> = ({ tabNum, setTabNum, TabList }) => (
  <Container>
    <Selection arrLength={TabList.length} selectedNum={tabNum} />
    {TabList.map((item, index) => (
      <Tab
        key={item}
        arrLength={TabList.length}
        isSelected={tabNum === index}
        onClick={() => setTabNum(index)}
      >
        {item}
      </Tab>
    ))}
  </Container>
)
