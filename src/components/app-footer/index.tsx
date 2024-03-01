import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
  return <h1 style={{ textAlign: 'center' }}>App Footer</h1>
}

export default memo(AppFooter)
