import styled from 'styled-components'

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #c20c0c;
  .content {
    box-sizing: border-box;
    padding-left: 180px;
    height: 35px;
    display: flex;
    align-items: center;
    a {
      display: block;
      line-height: 20px;
      margin: 0 20px;
      padding: 0 13px;
      color: #fff;
      border-radius: 20px;
    }
    a:hover,
    .active {
      background-color: #9b0909;
    }
  }
`
