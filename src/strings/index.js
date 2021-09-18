const split = (str, delim) => {
  return str.split(delim)
}

const pairs = (str) => {
  return str.match(/..?/g)
}

const reverse = (str) => {
  let reverse = str.split('').reverse()
  return reverse.join('')
}

module.exports = {
  split,
  pairs,
  reverse
}