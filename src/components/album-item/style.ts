import styled from 'styled-components'

export const AlbumItemWrapper = styled.div`
  font-size: 12px;
  .image {
    width: 118px;
    position: relative;
    img {
      width: 100px;
      height: 100px;
    }
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 -570px;
    }
    .play {
      position: absolute;
      width: 22px;
      height: 22px;
      bottom: 5px;
      right: 23px;
      display: none;
      background-position: 0 -85px;
    }
    &:hover {
      .play {
        display: block;
      }
    }
  }
  .name {
    width: 118px;
    color: #000;
  }
  .artist {
    width: 118px;
    color: #666;
  }
`
