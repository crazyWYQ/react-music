import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
  margin-top: 30px;
  > .content {
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    background-color: #f5f5f5;
    position: relative;
    box-sizing: border-box;
    padding: 0 16px;
    .control {
      width: 100%;
      box-sizing: border-box;
      padding: 0 5px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      display: flex;
      justify-content: space-between;
      .left {
        width: 16px;
        height: 16px;
        background-position: -260px -75px;
        &:hover {
          background-position: -280px -75px;
        }
      }
      .right {
        width: 16px;
        height: 16px;
        background-position: -300px -75px;
        &:hover {
          background-position: -320px -75px;
        }
      }
    }
    .item {
      height: 184px !important;
      display: flex !important;
      box-sizing: border-box;
      padding: 0 10px;
      height: 100%;
      align-items: center;
      justify-content: space-between;
    }
  }
`
