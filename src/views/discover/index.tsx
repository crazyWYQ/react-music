import React, { Suspense, memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './c-cpnt/navbar'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
