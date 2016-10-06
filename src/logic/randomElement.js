const randomElement = (array) => {
  const seed = (s) => {
    s = Math.sin(s) * 10000
    return s - Math.floor(s)
  }
  return array[Math.floor(array.length * seed(Math.random()))]
}

export default randomElement
