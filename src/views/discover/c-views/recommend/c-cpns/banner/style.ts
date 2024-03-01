import styled from 'styled-components'

export const BannerWrapper = styled.div`
  position: relative;
  .content {
    display: flex;
  }
`
export const BannerLeft = styled.div`
  position: relative;
  width: 730px;
  height: 284px;
  img {
    width: 100%;
    height: 284px;
  }
`

export const BannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank'
})`
  display: block;
  height: 284px;
  width: 250px;
  background-image: url(${require('@/assets/img/download.png')});
  background-repeat: no-repeat;
`

export const BannerControl = styled.div`
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  padding: 0 220px;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  justify-content: space-between;
  .banner-left,
  .banner-right {
    width: 37px;
    height: 63px;
  }
  .banner-left:hover,
  .banner-right:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
  .banner-left {
    background: url(${require('@/assets/img/banner-control-left.png')})
      no-repeat;
  }
  .banner-right {
    background: url(${require('@/assets/img/banner-control-right.png')})
      no-repeat;
  }
`
