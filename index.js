function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string))
}

function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string) {
  const lowerCaseResponse = 'I can\'t hear you!'
  const upperCaseResponse = 'YES INDEED!'
  const loveResponse = 'I love you, too.'
  
  if (string.toLowerCase() === string) {
    return lowerCaseResponse
  }
  
  if (string.toUpperCase() === string) {
    return upperCaseResponse
  }
  
  if (string === 'I love you, Grandma.') {
    return loveResponse
  }
  
}