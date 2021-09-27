import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FavoriteListAction } from '../../../../../store/companies/index'
import { SectionHeader } from '../../section-header/section-header'
import { Card } from './card/card'
import { Content, SectionContainer } from './styles'
import { FavoriteListSelector } from '../../../../../store/companies/index'

export const Favorites: FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(FavoriteListAction.favoritesRequest({ limit: 6 }))
  }, [dispatch])
  const FavoriteListItems = useSelector(FavoriteListSelector.selectItems)
  console.log(FavoriteListItems)
  return (
    <Content>
      <SectionHeader text="Favorites" isButtonShow />
      <SectionContainer>
        {FavoriteListItems.map((item) => (
          <Card key={item.id} cardData={item} />
        ))}
      </SectionContainer>
    </Content>
  )
}
