import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumItemWrapper } from './style'
import { formatImage } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: any
}

const AlbumItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <AlbumItemWrapper>
      <div className="image">
        <img src={formatImage(itemData.picUrl, 100)} alt="" />
        <div className="cover sprite_cover"></div>
        <div className="play sprite_icon"></div>
      </div>
      <div className="name one-row">{itemData.name}</div>
      <div className="artist one-row">{itemData.artist.name}</div>
    </AlbumItemWrapper>
  )
}

export default memo(AlbumItem)
