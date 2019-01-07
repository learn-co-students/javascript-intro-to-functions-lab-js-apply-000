function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  // console.log(string.toUpperCase())
  console.log(shout(string))
}
function logWhisper(string) {
  console.log(whisper(string))
}
function sayHiToGrandma(string) {
  console.log("string is: " + string);
  logShout(string);
  // design time vs runtime
  // runtime examole - next 2 lines:
  // if ("hello".toUpperCase() === "hello"
  // if ("HELLO" === 'hello'   false)
  if ( shout(string) === string ) {
    return "YES INDEED!"
  } else if ( whisper(string) === string ) {
    return "I can't hear you!"
  } else if ( string === "I love you, Grandma." ) {
    return "I love you, too."
  }
}
