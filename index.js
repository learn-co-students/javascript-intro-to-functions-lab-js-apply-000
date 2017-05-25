function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var shoutCase = string.toUpperCase();
  console.log(shoutCase)
}

function logWhisper(string) {
  var whisperCase = string.toLowerCase();
  console.log(whisperCase)
}

function sayHiToGrandma(string) {

  var lowercase = "hello"
  var uppercase = "HELLO"

  if (string === lowercase) {
    return "I can't hear you!"
  }
  if (string === uppercase) {
    return "YES INDEED!"
  }
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
  //
  // if (string = "I love you, Grandma") {
  //   return "I love you, too."
  // } else if  {
  //
  // }
}
