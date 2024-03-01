import styled from 'styled-components'

export const HotRedioWrapper = styled.div`
  .list {
    margin-top: 20px;
    > li {
      width: 210px;
      margin: 0 auto 8px;
      display: flex;
      .info {
        margin-left: 10px;
        .name,
        .desc {
          width: 160px;
          line-height: 21px;
        }
        .name:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
`
