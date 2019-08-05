const shout = function (string) {
  let capped = string.toUpperCase()
  return capped
}

const whisper = function (string) {
  return string.toLowerCase()
}

const logShout = function (string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

const sayHiToGrandma = function (string) {
  if (string === string.toLowerCase()) {
    return 'I can\'t hear you!'
  } else if (string === string.toUpperCase()){
    return "YES INDEED!"
  } else if (string === 'I love you, Grandma.') {
    return "I love you, too."
  }
}
