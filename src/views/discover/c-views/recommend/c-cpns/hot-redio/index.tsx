import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotRedioWrapper } from './style'
import HeaderV2 from '@/components/header-v2'
import { hotRedios } from '@/assets/data/local_data'

interface IProps {
  children?: ReactNode
}

const HotRedio: FC<IProps> = () => {
  return (
    <HotRedioWrapper>
      <HeaderV2 title="热门主播" />
      <ul className="list">
        {hotRedios.map((item, index) => {
          return (
            <li key={index}>
              <img src={item.url} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <p className="desc one-row">{item.desc}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </HotRedioWrapper>
  )
}

export default memo(HotRedio)
