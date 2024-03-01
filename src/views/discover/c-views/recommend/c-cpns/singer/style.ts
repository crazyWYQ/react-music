import styled from 'styled-components'

export const SingerWrapper = styled.div`
  .list {
    margin-top: 20px 0;
    .item {
      width: 210px;
      margin: 0 auto 13px;
      background-color: #fafafa;
      display: flex;
      &:hover {
        background-color: #f4f4f4;
      }
      img {
        width: 62px;
        height: 62px;
      }
      .info {
        padding-left: 14px;
        width: 133px;
        height: 60px;
        border: 1px solid #e9e9e9;
        border-left: none;
        .name {
          font-size: 14px;
          font-weight: 600;
        }
        .desc {
          width: 120px;
        }
        .name,
        .desc {
          margin-top: 8px;
        }
      }
    }
  }
  .btn {
    margin-left: 20px;
    padding: 0 5px 0 0;
    background-position: right -100px;
    &:hover {
      background-position: right -182px;
      .text {
        background-position: 0 -141px;
      }
    }
    .text {
      width: 206px;
      line-height: 31px;
      background-position: 0 -59px;
    }
  }
`
