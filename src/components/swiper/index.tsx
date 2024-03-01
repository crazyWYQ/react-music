import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SwiperContent, SwiperItem, SwiperWrapper } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'
import { LYRIC_STEP } from '@/utils/const'

interface IProps {
  children?: ReactNode
  swiperData: any
  swiperStyle: {
    height?: string
    width?: string
    padding?: string
  }
}

const Swiper: FC<IProps> = (props) => {
  const { swiperData, swiperStyle } = props
  const { height = '60%', width = '100%', padding = '100px 0' } = swiperStyle
  const { top } = useAppSelector(
    (state) => ({
      top: state.player.top
    }),
    shallowEqualApp
  )
  return (
    <SwiperWrapper height={height}>
      <SwiperContent
        style={{ top: -top + 'px' }}
        width={width}
        $padding={padding}
      >
        {swiperData.map((item: any, index: number) => {
          return (
            <SwiperItem
              key={item.time}
              className={
                (top - LYRIC_STEP) / LYRIC_STEP === index ? 'active' : ''
              }
            >
              {item.text}
            </SwiperItem>
          )
        })}
      </SwiperContent>
    </SwiperWrapper>
  )
}

export default memo(Swiper)
