function shout(string){
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
  var lowercase = string;
  var uppercase = string;
  if (string === 'I love you, Grandma.') {
    return "I love you, too."
  } if (string.toLowerCase() === lowercase) {
    return "I can't hear you!"
  } if (uppercase === string.toUpperCase()) {
    return "YES INDEED!"
  }
}
