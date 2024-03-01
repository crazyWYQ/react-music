import HeaderV1 from '@/components/header-v1'
import React, { memo, useRef } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'
import { NewAlbumWrapper } from './style'
import { Carousel } from 'antd'
import { shallowEqualApp, useAppSelector } from '@/store'
import AlbumItem from '@/components/album-item'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  const CarouselRef = useRef<ElementRef<typeof Carousel>>(null)
  const { albums } = useAppSelector(
    (state) => ({
      albums: state.recommend.albums
    }),
    shallowEqualApp
  )
  function prevClick() {
    CarouselRef.current?.prev()
  }
  function nextClick() {
    CarouselRef.current?.next()
  }
  return (
    <NewAlbumWrapper>
      <HeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <div className="control">
          <button className="sprite_02 left" onClick={prevClick}></button>
          <button className="sprite_02 right" onClick={nextClick}></button>
        </div>
        <Carousel ref={CarouselRef} speed={1000}>
          <div className="item">
            {albums[0]?.map((item: any) => {
              return <AlbumItem key={item.id} itemData={item} />
            })}
          </div>
          <div className="item">
            {albums[1]?.map((item: any) => {
              return <AlbumItem key={item.id} itemData={item} />
            })}
          </div>
        </Carousel>
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(NewAlbum)
