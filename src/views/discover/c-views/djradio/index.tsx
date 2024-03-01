import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Djredio: FC<IProps> = () => {
  return <div>Djredio</div>
}

export default memo(Djredio)
