import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { Carousel } from 'antd'
import { useAppSelector, shallowEqualApp } from '@/store'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Banner: FC<IProps> = () => {
  const { banner } = useAppSelector(
    (state) => ({
      banner: state.recommend.banner
    }),
    shallowEqualApp
  )
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  let bgUrl = banner[currentIndex]?.imageUrl
  if (bgUrl) {
    bgUrl = bgUrl + '?imageView&blur=40x20'
  }
  function prevClick() {
    bannerRef.current?.prev()
  }
  function nextClick() {
    bannerRef.current?.next()
  }
  function handlechangeBanner(current: number) {
    // console.log('current', current, 'next', next)
    setCurrentIndex(current)
  }
  return (
    <BannerWrapper
      style={{ background: `url(${bgUrl}) center center / 6000px` }}
    >
      <div className="wrap-v2 content">
        <BannerLeft>
          <Carousel
            autoplay
            fade
            ref={bannerRef}
            afterChange={handlechangeBanner}
          >
            {banner?.map((item) => {
              return (
                <div key={item.imageUrl}>
                  <img src={item.imageUrl} alt={item.typeTitle} />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
      </div>
      <BannerControl>
        <button className="banner-left" onClick={prevClick}></button>
        <button className="banner-right" onClick={nextClick}></button>
      </BannerControl>
    </BannerWrapper>
  )
}

export default memo(Banner)
