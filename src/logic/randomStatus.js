import statuses from '../constants/statuses'
import { randomGame } from '../config'

export default function randomStatus() {
  const seed = (s) => {
    s = Math.sin(s) * 10000
    return s - Math.floor(s)
  }
  const index = Math.floor(statuses.length * seed(Math.random()))
  if (index === statuses.length -1) {
    return statuses[index].concat(' ', randomGame())
  }
  return statuses[index]
}
