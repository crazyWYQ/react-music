import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import Banner from './c-cpns/banner'
import { ContentLeft, ContentRight, ContentWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import RankingList from './c-cpns/ranking-list'
import UserLogin from './c-cpns/user-login'
import Singer from './c-cpns/singer'
import { useAppDispatch } from '@/store'
import { fetchDataAction } from './store/recommend'
import HotRedio from './c-cpns/hot-redio'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchDataAction())
  }, [])
  return (
    <div>
      {/* <Banner /> */}
      <ContentWrapper className="wrap-v2">
        <ContentLeft>
          <HotRecommend />
          <NewAlbum />
          <RankingList />
        </ContentLeft>
        <ContentRight>
          <UserLogin />
          <Singer />
          <HotRedio />
        </ContentRight>
      </ContentWrapper>
    </div>
  )
}

export default memo(Recommend)
