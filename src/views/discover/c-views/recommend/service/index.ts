import appRequest from '@/service'

export const getBanner = () =>
  appRequest.get({
    url: '/banner'
  })

export const getHotRecommend = (limit = 30) =>
  appRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })

export const getNewAlbum = () =>
  appRequest.get({
    url: '/album/newest'
  })

export const getRankingList = (id: number) =>
  appRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })

export const getSingers = (limit = 5) =>
  appRequest.get({
    url: '/artist/list',
    params: {
      limit
    }
  })
