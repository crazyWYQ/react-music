import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSongLyric } from '../service/player'
import { ILyric, formatLyricString } from '@/utils/handle-player'

export const fetchLyricAction = createAsyncThunk(
  'lyricListAction',
  async (id: number, { dispatch }) => {
    const lyricList = await getSongLyric(id)
    dispatch(changeLyricListAction(formatLyricString(lyricList.lrc.lyric)))
  }
)
interface IinitialState {
  currentSong: any
  lyricList: ILyric[]
  playList: any[]
  playIndex: number
  top: number
  activeWindow: boolean
  playMode: number
}

const initialState: IinitialState = {
  currentSong: {
    name: '鲜花',
    id: 2086327879,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 27730224,
        name: '回春丹',
        tns: [],
        alias: []
      }
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: '',
    fee: 8,
    v: 4,
    crbt: null,
    cf: '',
    al: {
      id: 175805808,
      name: '鲜花',
      picUrl:
        'https://p1.music.126.net/fKJMTONzRMaeVthOmEvd9A==/109951168948248373.jpg',
      tns: [],
      pic_str: '109951168948248373',
      pic: 109951168948248370
    },
    dt: 341377,
    h: {
      br: 320000,
      fid: 0,
      size: 13657965,
      vd: -54478,
      sr: 48000
    },
    m: {
      br: 192000,
      fid: 0,
      size: 8194797,
      vd: -51976,
      sr: 48000
    },
    l: {
      br: 128000,
      fid: 0,
      size: 5463213,
      vd: -50589,
      sr: 48000
    },
    sq: {
      br: 1121384,
      fid: 0,
      size: 47851901,
      vd: -54516,
      sr: 48000
    },
    hr: {
      br: 1891146,
      fid: 0,
      size: 80699291,
      vd: -54477,
      sr: 48000
    },
    a: null,
    cd: '01',
    no: 1,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 0,
    s_id: 0,
    mark: 17716748288,
    originCoverType: 1,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 4,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    mv: 0,
    rtype: 0,
    rurl: null,
    mst: 9,
    cp: 2709563,
    publishTime: 0
  },
  lyricList: [],
  top: 0,
  activeWindow: false,
  playList: [
    {
      name: '鲜花',
      id: 2086327879,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 27730224,
          name: '回春丹',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 4,
      crbt: null,
      cf: '',
      al: {
        id: 175805808,
        name: '鲜花',
        picUrl:
          'https://p1.music.126.net/fKJMTONzRMaeVthOmEvd9A==/109951168948248373.jpg',
        tns: [],
        pic_str: '109951168948248373',
        pic: 109951168948248370
      },
      dt: 341377,
      h: {
        br: 320000,
        fid: 0,
        size: 13657965,
        vd: -54478,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 8194797,
        vd: -51976,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 5463213,
        vd: -50589,
        sr: 48000
      },
      sq: {
        br: 1121384,
        fid: 0,
        size: 47851901,
        vd: -54516,
        sr: 48000
      },
      hr: {
        br: 1891146,
        fid: 0,
        size: 80699291,
        vd: -54477,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17716748288,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 4,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 2709563,
      publishTime: 0
    }
  ],
  playIndex: 0,
  playMode: 0
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeLyricListAction(state, { payload }) {
      state.lyricList = payload
    },
    changeLyricTopAction(state, { payload }) {
      state.top = state.top + payload
    },
    changeActiveWindowAction(state, { payload }) {
      state.activeWindow = payload
    },
    changePlayIndexAction(state, { payload }) {
      if (state.playIndex === 0 && payload === -1)
        state.playIndex = state.playList.length - 1
      else state.playIndex = (state.playIndex + payload) % state.playList.length
      state.currentSong = state.playList[state.playIndex]
    }
  }
})
export const {
  changeLyricListAction,
  changeLyricTopAction,
  changeActiveWindowAction,
  changePlayIndexAction
} = playerSlice.actions
export default playerSlice.reducer
