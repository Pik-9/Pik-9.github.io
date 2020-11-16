export function randInt(from, to) {
  return Math.floor(Math.random() * (to - from)) + from;
}

export function pickRandomly(array) {
  return array[Math.floor(Math.random() * array.length)];
}
