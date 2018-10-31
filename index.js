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
  var CantHear = "I can\'t hear you!"
  var CanHear = "YES INDEED!"
  var Love = "I love you, too."

if (string.toLowerCase() === string) {
  return CantHear
}

if (string.toUpperCase() === string) {
  return CanHear
}

if ("I love you, Grandma." === string) {
  return Love
}

}

