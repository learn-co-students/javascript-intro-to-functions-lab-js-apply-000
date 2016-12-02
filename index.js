function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string) {
  return sayHiToGrandma('YES INDEED!').toEqual(string.toUpperCase())
}
function sayHiToGrandma(string) {
  return sayHiToGrandma('I love you, Grandma.').toEqual('I love you, too.')
}
