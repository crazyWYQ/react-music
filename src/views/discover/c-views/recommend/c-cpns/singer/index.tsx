import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SingerWrapper } from './style'
import HeaderV2 from '@/components/header-v2'
import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const Singer: FC<IProps> = () => {
  const { singers } = useAppSelector(
    (state) => ({
      singers: state.recommend.singers
    }),
    shallowEqualApp
  )
  return (
    <SingerWrapper>
      <HeaderV2 title="入驻歌手" moreText="查看全部 >" />
      <ul className="list">
        {singers.map((item) => {
          return (
            <li key={item.id} className="item">
              <img src={item.img1v1Url} alt={item.name} />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="desc one-row">{item.alias}</div>
              </div>
            </li>
          )
        })}
      </ul>
      <button className="btn sprite_button">
        <div className="text sprite_button">申请成为网易音乐人</div>
      </button>
    </SingerWrapper>
  )
}

export default memo(Singer)
