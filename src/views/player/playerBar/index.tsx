import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import {
  PlayerWrapper,
  PlayerBarRight,
  PlayerBarCenter,
  PlayerBarLeft,
  LockWrapper
} from './style'
import { Slider } from 'antd'
import { getSongPlayUrl } from '@/utils/handle-player'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { formatPlayTime } from '@/utils/format'
import {
  changeActiveWindowAction,
  changeLyricTopAction,
  changePlayIndexAction,
  fetchLyricAction
} from '../store/player'
import LyricWindow from './conponents/lyricWindow'
import { LYRIC_STEP } from '@/utils/const'

interface IProps {
  children?: ReactNode
}

const PlayerBar: FC<IProps> = () => {
  const audioRef = useRef<HTMLAudioElement>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isSlidering, setIsSlidering] = useState(false)
  const [isLock, setIsLock] = useState(false)

  const dispatch = useAppDispatch()

  const { currentSong, lyricList, top, activeWindow } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyricList: state.player.lyricList,
      top: state.player.top,
      activeWindow: state.player.activeWindow
    }),
    shallowEqualApp
  )
  useEffect(() => {
    audioRef.current!.src = getSongPlayUrl(currentSong.id)
    dispatch(fetchLyricAction(currentSong.id))
  }, [currentSong])

  useEffect(() => {
    // 检查歌词是否需要上移
    if (
      top / LYRIC_STEP < lyricList.length &&
      lyricList[top / LYRIC_STEP].time <= currentTime
    ) {
      dispatch(changeLyricTopAction(LYRIC_STEP))
    }
  }, [currentTime])
  function handlePrevSong() {
    dispatch(changePlayIndexAction(-1))
  }
  function handleNextSong() {
    dispatch(changePlayIndexAction(1))
  }
  function handlePauseOrPlay() {
    isPlaying ? audioRef.current?.pause() : audioRef.current?.play()
    setIsPlaying(!isPlaying)
  }
  function changeCurrentTime() {
    // 当前播放的时间
    const currentTime = audioRef.current!.currentTime * 1000
    if (!isSlidering) {
      setCurrentTime(currentTime)
      const progress = Math.floor((currentTime / currentSong.dt) * 100)
      setProgress(progress)
    }
  }
  function handleSliderChange(value: number) {
    audioRef.current!.currentTime = ((value / 100) * currentSong.dt) / 1000
    setIsSlidering(false)
  }
  function handleSliderChangeing(value: number) {
    setIsSlidering(true)
    const currentTime = (value / 100) * currentSong.dt
    setCurrentTime(currentTime)
    setProgress(value)
  }
  function handleWindow() {
    dispatch(changeActiveWindowAction(!activeWindow))
  }
  function handleLock() {
    setIsLock(!isLock)
  }
  return (
    <PlayerWrapper
      className="sprite_playbar"
      style={{ bottom: isLock ? '-1px' : '' }}
    >
      <LockWrapper isLock={isLock}>
        <div className="sprite_playbar lock">
          <i className="sprite_playbar icon" onClick={handleLock}></i>
        </div>
      </LockWrapper>
      <div className="wrap-v2 content">
        <PlayerBarLeft $playing={isPlaying}>
          <div className="sprite_playbar prev" onClick={handlePrevSong}></div>
          <div
            className="sprite_playbar play"
            onClick={handlePauseOrPlay}
          ></div>
          <div className="sprite_playbar next" onClick={handleNextSong}></div>
        </PlayerBarLeft>
        <PlayerBarCenter>
          <div className="image">
            <img src={currentSong.al?.picUrl} alt="" />
            <div className="sprite_playbar cover"></div>
          </div>
          <div className="info">
            <div className="top">
              <span className="name">{currentSong.name}</span>
              <span className="artits">{currentSong.ar[0]?.name}</span>
            </div>
            <div className="bottom">
              <Slider
                value={progress}
                step={0.1}
                onChangeComplete={handleSliderChange}
                onChange={handleSliderChangeing}
                tooltip={{ formatter: null }}
              />
              <div className="current">{formatPlayTime(currentTime)}</div>
              <div className="line">/</div>
              <div className="duration">{formatPlayTime(currentSong.dt)}</div>
            </div>
          </div>
        </PlayerBarCenter>
        <PlayerBarRight>
          <div className="btn pip" onClick={handleWindow}>
            画中画歌词
          </div>
          <div className="btn sprite_playbar collect">收藏</div>
          <div className="btn sprite_playbar share">分享</div>
          <div className="deliver"></div>
          <div className="btn sprite_playbar sound">声音</div>
          <div className="btn sprite_playbar mode">模式</div>
          <div className="sprite_playbar list">156</div>
        </PlayerBarRight>
      </div>
      <audio ref={audioRef} onTimeUpdate={changeCurrentTime} />
      {/* 歌词窗口 */}
      <LyricWindow playing={isPlaying} handlePauseOrPlay={handlePauseOrPlay} />
    </PlayerWrapper>
  )
}

export default memo(PlayerBar)
