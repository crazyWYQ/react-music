import styled from 'styled-components'

export const ItemWrapper = styled.div`
  padding: 0 0 30px 42px;
  > .top {
    position: relative;
    color: #ccc;
    img {
      width: 140px;
      height: 140px;
    }
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 140px;
      height: 140px;
      background-position: 0 0;
    }
    .info {
      position: absolute;
      width: 140px;
      height: 27px;
      box-sizing: border-box;
      padding: 0 10px;
      left: 0;
      bottom: 0;
      background-position: 0 -537px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        background-position: 0 -22px;
        span {
          margin-left: 20px;
        }
      }
      .right {
        width: 16px;
        height: 17px;
        background-position: 0 0;
      }
    }
  }
  > .text {
    margin-top: 10px;
    width: 140px;
    font-size: 14px;
  }
`
