import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingListWrapper } from './style'
import HeaderV1 from '@/components/header-v1'
import { fetRankingListAction } from '../../store/recommend'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import RankingListItem from './c-cpns/ranking-list-item'

interface IProps {
  children?: ReactNode
}

const RankingList: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { rankingList } = useAppSelector(
    (state) => ({
      rankingList: state.recommend.rankingList
    }),
    shallowEqualApp
  )
  useEffect(() => {
    dispatch(fetRankingListAction())
  }, [])
  return (
    <RankingListWrapper>
      <HeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {rankingList.map((item, index) => {
          return <RankingListItem itemData={item.playlist} key={index} />
        })}
      </div>
    </RankingListWrapper>
  )
}

export default memo(RankingList)
