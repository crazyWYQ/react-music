import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ItemWrapper } from './style'
import { formatCount, formatImage } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: any
}

const MenuItemV1: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <ItemWrapper>
      <div className="top">
        <img src={formatImage(itemData.picUrl, 140)} alt="" />
        <div className="sprite_cover cover"></div>
        <div className="sprite_cover info">
          <div className="sprite_icon  left">
            <span>{formatCount(itemData.playCount)}</span>
          </div>
          <div className="sprite_icon right"></div>
        </div>
      </div>
      <div className="text">{itemData.name}</div>
    </ItemWrapper>
  )
}

export default memo(MenuItemV1)
