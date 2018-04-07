function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  let UPPERCASE = "HELLO"
  let LOWERCASE = "hello"
  let phrase = "I love you, Grandma."

  if(string === LOWERCASE){
    return "I can't hear you!"
  }else if (string === UPPERCASE) {
    return "YES INDEED!"
  }else if (string === phrase) {
    return "I love you, too."
  }
}
