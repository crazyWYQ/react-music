import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import HeaderV1 from '@/components/header-v1'
import { Content } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'
import MenuItemV1 from '@/components/menu-item-v1'
interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const { hotRecommend } = useAppSelector(
    (state) => ({
      hotRecommend: state.recommend.hotRecommend
    }),
    shallowEqualApp
  )
  return (
    <>
      <HeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      />
      <Content>
        {hotRecommend.map((item) => {
          return <MenuItemV1 itemData={item} key={item.name} />
        })}
      </Content>
    </>
  )
}

export default memo(HotRecommend)
