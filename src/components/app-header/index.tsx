import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import type { FC, ReactNode } from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import HeaderData from '@/assets/data/header-data.json'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  function showItem() {
    return HeaderData.map((item) => {
      if (item.type === 'path') {
        return (
          <NavLink key={item.title} to={item.path}>
            {item.title}
            <i className="icon sprite_01"></i>
          </NavLink>
        )
      } else {
        return (
          <a href={item.path} key={item.title}>
            {item.title}
          </a>
        )
      }
    })
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="nav">{showItem()}</div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="line"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
