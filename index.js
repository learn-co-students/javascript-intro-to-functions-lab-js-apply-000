function shout(string) {
  return "hello".toUpperCase()
}

function whisper(string) {
  return "hello".toLowerCase()
}

function logShout(string) {
  console.log("hello".toUpperCase())
}

function logWhisper(string) {
  console.log("hello".toLowerCase())
}

function sayHiToGrandma(string){
  var uppercase = string
  var lowercase = string
  if (uppercase.toUpperCase() === uppercase) {
    return "YES INDEED!"
}
  else if (lowercase.toLowerCase() ===lowercase) {
    return "I can't hear you!"
}
  else {
    return "I love you, too."}
}
