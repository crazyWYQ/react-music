import styled from 'styled-components'

interface ISwiperWrapper {
  height: string
}

export const SwiperWrapper = styled.div<ISwiperWrapper>`
  position: relative;
  height: ${(props) => props.height};
  overflow-y: hidden;
  .active {
    color: #fff;
  }
`

interface ISwiperContent {
  $padding: string
  width: string
}
export const SwiperContent = styled.div<ISwiperContent>`
  padding: ${(props) => props.$padding};
  width: ${(props) => props.width};
  position: absolute;
  left: 0;
  transition: top 500ms linear;
`

export const SwiperItem = styled.div`
  line-height: 35px;
  text-align: center;
  width: 100%;
  font-size: 14px;
`
