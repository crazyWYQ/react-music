import styled from 'styled-components'

export const HeaderV1Wrapper = styled.div`
  height: 33px;
  padding: 0 10px 0 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #c10d0c;
  background-position: -225px -155px;
`

export const HeaderV1Left = styled.div`
  display: flex;
  .title {
    font-size: 20px;
    font-weight: 500;
  }
  .keywords {
    margin-left: 20px;
    display: flex;
    align-items: center;
    color: #666;
    .text:hover {
      cursor: pointer;
      text-decoration: underline;
    }
    .line {
      margin: 0 13px;
      color: #ccc;
    }
  }
`

export const HeaderV1Right = styled.div`
  display: flex;
  align-items: center;
  .more:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .icon {
    margin-left: 2px;
    display: block;
    width: 12px;
    height: 12px;
    background-position: 0 -240px;
  }
`
