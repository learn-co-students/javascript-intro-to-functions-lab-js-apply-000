function shout (string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log ('HELLO')
}
function logWhisper(string) {
  console.log ("hello")
}
function sayHiToGrandma(string) {
  if ('hello'.toLowerCase() === string) {
    return "I can't hear you!"
  }else if('HELLO'.toUpperCase() === string) {
    return "YES INDEED!"
  }else if("I love you, Grandma." === string){
    return "I love you, too."
  }
}
