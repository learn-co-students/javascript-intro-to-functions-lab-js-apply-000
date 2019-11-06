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

  if (whisper(string) === string) {
    return "I can't hear you!"
  } //checks if the string is lowercase

  else if (shout(string) === string) {
    return "YES INDEED!"
  } //checks if string is upper case.

  else if ("I love you, Grandma." === string) {
    return "I love you, too."
  }
}
