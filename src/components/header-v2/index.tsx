import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderV2Wrapper } from './style'

interface IProps {
  children?: ReactNode
  title: string
  moreText?: string
}

const HeaderV2: FC<IProps> = (props) => {
  const { title, moreText = '' } = props
  return (
    <HeaderV2Wrapper>
      <div className="title">{title}</div>
      <div className="more">{moreText}</div>
    </HeaderV2Wrapper>
  )
}

export default memo(HeaderV2)
