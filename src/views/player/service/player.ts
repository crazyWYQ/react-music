import appRequest from '@/service'

export const getSongDetail = (ids: number) =>
  appRequest.get({
    url: '/song/detail',
    params: {
      ids
    }
  })

export const getSongLyric = (id: number) =>
  appRequest.get({
    url: '/lyric',
    params: {
      id
    }
  })
