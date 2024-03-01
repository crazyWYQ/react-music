import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getBanner,
  getHotRecommend,
  getNewAlbum,
  getRankingList,
  getSingers
} from '../service'

export const fetchDataAction = createAsyncThunk(
  'fetchData',
  async (arg, { dispatch }) => {
    getBanner().then((res) => {
      dispatch(changeBannerAction(res.banners))
    })
    getHotRecommend(8).then((res) => {
      dispatch(changeHotRecommendAction(res.result))
    })
    getNewAlbum().then((res) => {
      const albums: any[] = []
      albums.push(res.albums.slice(0, 5))
      albums.push(res.albums.slice(5, 10))
      dispatch(changeAlbumsAction(albums))
    })
    getSingers().then((res) => {
      dispatch(changeSingerAction(res.artists))
    })
  }
)
export const fetRankingListAction = createAsyncThunk(
  'rankinglist',
  (arg, { dispatch }) => {
    const rankingIds = [19723756, 3779629, 2884035]
    const promises: Promise<any>[] = []
    for (const id of rankingIds) {
      promises.push(getRankingList(id))
    }
    Promise.all(promises).then((res) => {
      dispatch(changeRankingListAction(res))
    })
  }
)
interface IinitialState {
  banner: any[]
  hotRecommend: any[]
  albums: any[]
  rankingList: any[]
  singers: any[]
}

const initialState: IinitialState = {
  banner: [],
  hotRecommend: [],
  albums: [],
  rankingList: [],
  singers: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerAction(state, { payload }) {
      state.banner = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommend = payload
    },
    changeAlbumsAction(state, { payload }) {
      state.albums = payload
    },
    changeRankingListAction(state, { payload }) {
      state.rankingList = payload
    },
    changeSingerAction(state, { payload }) {
      state.singers = payload
    }
  }
})

export const {
  changeBannerAction,
  changeHotRecommendAction,
  changeAlbumsAction,
  changeRankingListAction,
  changeSingerAction
} = recommendSlice.actions

export default recommendSlice.reducer
