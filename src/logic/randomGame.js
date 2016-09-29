import games from '../constants/games'

export default function randomMessage() {
  const seed = (s) => {
    s = Math.sin(s) * 10000
    return s - Math.floor(s)
  }
  return games[Math.floor(games.length * seed(Math.random()))]
}
