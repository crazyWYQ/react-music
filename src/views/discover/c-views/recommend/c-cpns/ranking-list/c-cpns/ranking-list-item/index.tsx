import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingListItemWrapper } from './style'

interface IProps {
  children?: ReactNode
  itemData: any
}

const RankingListItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <RankingListItemWrapper>
      <div className="top">
        <img src={itemData.coverImgUrl} alt="" className="left" />
        <div className="right">
          <h3 className="name">{itemData.name}</h3>
          <div className="buttons">
            <button className="sprite_02 play">播放</button>
            <button className="sprite_02 collect">收藏</button>
            <button></button>
          </div>
        </div>
      </div>
      <ul className="list">
        {itemData.tracks.slice(0, 10).map((item: any, index: any) => {
          return (
            <li key={item.id}>
              <div className="index">{index + 1}</div>
              <div className="text one-row">{item.name}</div>
              <div className="display">
                <button className="sprite_02 play">播放</button>
                <button className="sprite_icon2 add">添加</button>
                <button className="sprite_02 collect">收藏</button>
              </div>
            </li>
          )
        })}
        <div className="more">查看更多{'>'}</div>
      </ul>
    </RankingListItemWrapper>
  )
}

export default memo(RankingListItem)
