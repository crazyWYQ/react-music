export function getSongPlayUrl(id: number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

export interface ILyric {
  time: number
  text: string
}

const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

export function formatLyricString(lyricString: string) {
  // 获取每一行歌词
  const lines: string[] = lyricString.split('\n')
  const lyricList: ILyric[] = []
  for (const line of lines) {
    const results = timeRegExp.exec(line)
    if (!results) continue
    const m = Number(results[1]) * 60 * 1000
    const s = Number(results[2]) * 1000
    const h =
      results[3].length === 2 ? Number(results[3]) * 10 : Number(results[3])
    const time = m + s + h
    const text = line.replace(timeRegExp, '')
    if (text === '') continue
    lyricList.push({ time, text })
  }

  return lyricList
}
