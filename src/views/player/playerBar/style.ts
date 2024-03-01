import styled from 'styled-components'
interface BarControl {
  $playing: boolean
}

export const PlayerWrapper = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: -50px;
  /* box-sizing: border-box; */
  padding-top: 2px;
  background-position: 0 0;
  background-repeat: repeat-x;
  transition: bottom 100ms linear;
  &:hover {
    bottom: -1px;
  }
  .content {
    height: 53px;
    display: flex;
    align-items: center;
    color: #fff;
  }
`
export const PlayerBarLeft = styled.div<BarControl>`
  display: flex;
  align-items: center;
  .prev,
  .next {
    width: 28px;
    height: 28px;
    margin-right: 8px;
  }
  .prev {
    background-position: 0 -130px;
    &:hover {
      background-position: -30px -130px;
    }
  }
  .next {
    background-position: -80px -130px;
    &:hover {
      background-position: -110px -130px;
    }
  }
  .play {
    margin-right: 8px;
    width: 36px;
    height: 36px;
    background-position: -40px
      ${(props) => (props.$playing ? '-165px' : '-204px')};
  }
`

export const PlayerBarCenter = styled.div`
  margin: 0 10px;
  display: flex;
  align-items: center;
  .image {
    position: relative;
    img {
      height: 34px;
      margin-right: 8px;
    }
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 34px;
      height: 35px;
      background-position: 0 -80px;
    }
  }

  .info {
    width: 580px;
    .top {
      margin: 5px 0px 5px 5px;
      .name {
        color: #e8e8e8;
        margin-right: 20px;
      }
      .artits {
        color: #9b9b9b;
      }
    }
    .bottom {
      margin-left: 10px;
      display: flex;
      align-items: center;
      .ant-slider {
        width: 493px;
        margin: 0;
        .ant-slider-rail {
          height: 9px;
          transform: translateY(-3px);
          background: url(${require('@/assets/img/progress_bar.png')}) right 0;
        }
        .ant-slider-track {
          height: 9px;
          transform: translateY(-3px);
          background: url(${require('@/assets/img/progress_bar.png')}) left -66px;
        }
        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${require('@/assets/img/sprite_icon.png')}) 0 -250px;
        }
        .ant-slider-handle::after {
          display: none;
        }
      }
      div {
        color: #797979;
      }
      .line {
        margin: 0 5px;
      }
      .current {
        margin-left: 15px;
        color: #a1a1a1;
      }
    }
  }
`

export const PlayerBarRight = styled.div`
  display: flex;
  align-items: center;
  .btn {
    margin-right: 3px;
    width: 25px;
    height: 25px;
    text-indent: -9999px;
  }
  .pip {
    background: url(${require('@/assets/img/pip_icon')}) no-repeat 0 0;
    &:hover {
      background-position-y: -25px;
    }
  }
  .collect {
    background-position: -88px -163px;
    &:hover {
      background-position: -88px -189px;
    }
  }
  .share {
    background-position: -114px -163px;
    &:hover {
      background-position: -114px -189px;
    }
  }
  .sound {
    background-position: -2px -248px;
    &:hover {
      background-position: -31px -248px;
    }
  }
  .mode {
    background-position: -3px -344px;
    &:hover {
      background-position: -33px -344px;
    }
  }
  .list {
    height: 25px;
    width: 38px;
    padding-left: 21px;
    line-height: 27px;
    text-align: center;
    color: #666;
    text-shadow: 0 1px 0 #080707;
    background-position: -42px -68px;
    &:hover {
      background-position: -42px -98px;
    }
  }
  .deliver {
    margin: 0 8px;
    width: 1px;
    height: 14px;
    border: 1px solid transparent;
    background-color: #222000;
  }
`

interface ILockWrapper {
  isLock: boolean
}
export const LockWrapper = styled.div<ILockWrapper>`
  padding-right: 15px;
  width: 100%;
  display: flex;
  justify-content: right;
  position: absolute;
  top: -16px;
  left: 0;
  z-index: -100;
  .lock {
    width: 52px;
    height: 67px;
    background-position: 0 -380px;
    .icon {
      display: block;
      width: 18px;
      height: 18px;
      margin: 6px 0 0 17px;
      background-position: ${(props) => (props.isLock ? '-100px' : '-80px')} -380px;
      &:hover {
        /* background-position: -80px -400px; */
        background-position: ${(props) => (props.isLock ? '-100px' : '-80px')} -400px;
      }
    }
  }
`
