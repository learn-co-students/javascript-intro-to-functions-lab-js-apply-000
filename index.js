function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  let output = string.toUpperCase()
  console.log(output)
}

function logWhisper(string) {
  let output = string.toLowerCase()
  console.log(output)
}

function sayHiToGrandma(string) {
  if (string === `I love you, Grandma.`){
    return `I love you, too.`
  }
  
  let upper = string.toUpperCase()
  
  if (string === upper) {
    return `YES INDEED!`
  } else {
    return `I can't hear you!`
  }
  
}