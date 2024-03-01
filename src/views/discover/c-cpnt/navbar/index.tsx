import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavWrapper } from './style'
import { discoverNav } from '@/assets/data/local_data'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Navbar: FC<IProps> = () => {
  return (
    <NavWrapper>
      <div className="content wrap-v1">
        {discoverNav.map((item) => {
          return (
            <NavLink key={item.link} to={item.link}>
              {item.title}
            </NavLink>
          )
        })}
      </div>
    </NavWrapper>
  )
}

export default memo(Navbar)
