import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderV1Left, HeaderV1Wrapper, HeaderV1Right } from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  keywords?: string[]
  title?: string
  moreLink?: string
  moreText?: string
}

const HeaderV1: FC<IProps> = (props) => {
  const {
    title = '默认标题',
    keywords = [],
    moreLink = '/',
    moreText = '更多'
  } = props
  return (
    <HeaderV1Wrapper className="sprite_02">
      <HeaderV1Left>
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {keywords?.map((item, index) => {
            return (
              <div key={item}>
                <span className="text">{item}</span>
                {index < keywords.length - 1 && <span className="line">|</span>}
              </div>
            )
          })}
        </div>
      </HeaderV1Left>
      <HeaderV1Right>
        <Link className="more" to={moreLink}>
          {moreText}
        </Link>
        <i className="icon sprite_02"></i>
      </HeaderV1Right>
    </HeaderV1Wrapper>
  )
}

export default memo(HeaderV1)
