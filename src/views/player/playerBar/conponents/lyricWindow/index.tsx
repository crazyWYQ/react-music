import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { LyricWrapper, LyricContent, Cover } from './style'
import Swiper from '@/components/swiper'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { CloseOutlined } from '@ant-design/icons'
import {
  changeActiveWindowAction,
  changePlayIndexAction
} from '@/views/player/store/player'

interface IProps {
  children?: ReactNode
  playing: boolean
  handlePauseOrPlay: () => void
}

const LyricWindow: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const { playing, handlePauseOrPlay } = props
  const { lyricList, currentSong, activeWindow } = useAppSelector(
    (state) => ({
      lyricList: state.player.lyricList,
      currentSong: state.player.currentSong,
      activeWindow: state.player.activeWindow
    }),
    shallowEqualApp
  )
  function handleClose() {
    dispatch(changeActiveWindowAction(!activeWindow))
  }
  function handlePrevSong() {
    dispatch(changePlayIndexAction(-1))
  }
  function handleNextSong() {
    dispatch(changePlayIndexAction(1))
  }
  return (
    <LyricWrapper $active={activeWindow}>
      <LyricContent>
        <h3 className="title">{currentSong.name}</h3>
        <p className="singer">{currentSong.ar[0]?.name}</p>
        <Swiper swiperStyle={{ height: '60%' }} swiperData={lyricList} />
        <Cover className="cover" $playing={playing}>
          <div className="icon">
            <CloseOutlined className="close" onClick={handleClose} />
          </div>
          <div className="btns">
            <button className="sprite_playbar prev" onClick={handlePrevSong}>
              上一首
            </button>
            <button
              className="sprite_playbar pause"
              onClick={handlePauseOrPlay}
            >
              暂停或播放
            </button>
            <button className="sprite_playbar next" onClick={handleNextSong}>
              下一首
            </button>
          </div>
        </Cover>
      </LyricContent>
    </LyricWrapper>
  )
}

export default memo(LyricWindow)
