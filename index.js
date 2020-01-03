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
   console.log("I can't hear you!") if string.toLowerCase() === string
   console.log("Yes indeed!") if string.toUpperCase() === string
   console.log("I love you, too.") if string === "I love you, Grandma."
}