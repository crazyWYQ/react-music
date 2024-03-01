import styled from 'styled-components'

interface ILyricWrapper {
  $active: boolean
}
export const LyricWrapper = styled.div<ILyricWrapper>`
  display: ${(props) => (props.$active ? 'block' : 'none')};
  width: 255px;
  height: 357px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #0b0f14;
  border-radius: 5px;
`
export const LyricContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  &:hover {
    .cover {
      display: block;
    }
  }
  .singer,
  .title {
    text-align: center;
  }
  .title {
    padding: 20px 0 10px;
    color: #aeafb1;
  }
  .singer {
    margin-bottom: 20px;
  }
`
interface ICover {
  $playing: boolean
}

export const Cover = styled.div<ICover>`
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  left: 0;
  top: 0;
  border-radius: 5px;
  .icon {
    padding: 4px;
    display: flex;
    justify-content: right;
    .close {
      width: 20px;
      height: 20px;
      color: #fff;
    }
  }
  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 280px;
    .prev,
    .next {
      width: 28px;
      height: 28px;
      text-indent: -9999px;
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
    .pause {
      margin: 0 8px;
      width: 36px;
      height: 36px;
      text-indent: -9999px;
      background-position: 0
        ${(props) => (props.$playing ? '-165px' : '-204px')};
    }
  }
`
