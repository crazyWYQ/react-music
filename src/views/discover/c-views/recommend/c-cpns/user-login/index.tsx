import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { UserLoginWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const UserLogin: FC<IProps> = () => {
  return (
    <UserLoginWrapper className="sprite_02">
      <p className="text">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </p>
      <a className="login sprite_02" href="#/login">
        用户登录
      </a>
    </UserLoginWrapper>
  )
}

export default memo(UserLogin)
