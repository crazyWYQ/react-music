import styled from 'styled-components'

export const RankingListItemWrapper = styled.div`
  .top {
    display: flex;
    padding: 20px 0 0 20px;
    width: 211px;
    .left {
      width: 80px;
      height: 80px;
    }
    .right {
      margin: 6px 0 0 10px;
      .buttons {
        > button {
          width: 22px;
          height: 22px;
          text-indent: -9999px;
          margin: 10px 10px 0 0;
        }
        .play {
          background-position: -267px -205px;
          &:hover {
            background-position: -267px -235px;
          }
        }
        .collect {
          background-position: -300px -205px;
          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }
  }
  .list {
    margin-top: 20px;
    > li {
      line-height: 32px;
      position: relative;
      box-sizing: border-box;
      padding-left: 20px;
      color: #000;
      display: flex;
      align-items: center;
      &:hover {
        .text {
          width: 96px;
        }
        .display {
          display: flex;
        }
      }
      .index {
        width: 35px;
        text-align: center;
        font-size: 16px;
        color: #666;
      }
      .text:hover {
        text-decoration: underline;
        cursor: pointer;
      }
      .display {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translate(0, -50%);
        display: none;
        align-items: center;
        > button {
          width: 17px;
          height: 17px;
          background-color: transparent;
          text-indent: -9999px;
        }
        .play {
          background-position: -267px -268px;
          &:hover {
            background-position: -267px -288px;
          }
        }
        .add {
          margin: 0 10px;
          width: 13px;
          height: 13px;
          background-position: 0 -700px;
          &:hover {
            background-position: -22px -700px;
          }
        }
        .collect {
          background-position: -297px -268px;
          &:hover {
            background-position: -297px -288px;
          }
        }
      }
    }
  }
  .more {
    line-height: 32px;
    text-align: right;
    margin-right: 32px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`
