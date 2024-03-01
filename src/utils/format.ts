export function formatCount(num: number) {
  let result = ''
  if (num < 100000000) {
    result = Math.ceil(num / 10000) + '万'
  }
  return result
}

export function formatImage(url: string, width: number, height = width) {
  return url + `?params=${width}x${height}`
}

export function formatPlayTime(time: number) {
  const m =
    Math.floor(time / 60000) < 10
      ? '0' + Math.floor(time / 60000)
      : Math.floor(time / 60000)
  const s =
    Math.floor((time / 1000) % 60) < 10
      ? '0' + Math.floor((time / 1000) % 60)
      : Math.floor((time / 1000) % 60)
  return m + ':' + s
}
