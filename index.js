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
  var uppercase = string
  var lowercase = string
  var mixedCase = string

  if (uppercase.toUpperCase() === uppercase) // true
  return "YES INDEED!"

  else if (lowercase.toLowerCase() === lowercase) // true
  return "I can't hear you!"

  else if (mixedCase === "I love you, Grandma.")
  return "I love you, too."
}
