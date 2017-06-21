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
  var responce
 if (string.toUpperCase() == string) {
   responce = 'YES INDEED!'
   return responce
 }
 if (string.toLowerCase() == string) {
   responce = "I can't hear you!"
   return responce
 }
 if (string == "I love you, Grandma.") {
   responce = "I love you, too."
   return responce
 }
}
