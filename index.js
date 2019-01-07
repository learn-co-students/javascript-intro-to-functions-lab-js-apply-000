function shout(string) {
  return string.toUpperCase('Hello!')
}

function whisper(string) {
  return string.toLowerCase('hello!')
}

function logShout(string) {
  console.log(string.toUpperCase('Hello!'))
}

function logWhisper(string) {
  console.log(string.toLowerCase('hello!'))
}

function sayHiToGrandma(string) {
  if(string.toLowerCase('hello!')) {
    return("I can\'t hear you!")
  }
  else if(string.toUpperCase('Hello!')) {
    return("YES INDEED!")
  }
  else(string.mixedCase("I love you, Grandma.")) {
    return("I love you, too.")
  }
}