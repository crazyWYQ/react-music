import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 70px;
  background-color: #242424;
  .content {
    display: flex;
    justify-content: space-between;
  }
  .line {
    height: 5px;
    background-color: #c20c0c;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  a {
    display: block;
    line-height: 70px;
  }
  .logo {
    width: 157px;
    padding-right: 20px;
    background-position: 0 0;
    text-indent: -9999px;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    a {
      color: #cccccc;
      font-size: 14px;
      padding: 0 20px;
    }
    a:hover {
      background-color: #000;
      color: #fff;
    }
    .active {
      position: relative;
      background-color: #000;
      color: #fff;
      .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        left: 50%;
        bottom: -1px;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  .search {
    width: 158px;
    height: 32px;
    font-size: 12px;
    border-radius: 32px;
  }
  .center {
    margin: 0 12px;
    padding: 0 16px;
    border: 1px solid #4f4f4f;
    color: #ccc;
    text-align: center;
    line-height: 30px;
    border-radius: 30px;
  }
  .center:hover {
    border: #fff 1px solid;
    color: #fff;
    cursor: pointer;
  }
  .login {
    margin-left: 8px;
    color: #787878;
  }
  .login:hover {
    cursor: pointer;
    color: #ccc;
  }
`
