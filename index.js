function shout(string){
  return string.toUpperCase()
}
shout("hello")

function whisper(string){
  return string.toLowerCase()
}
whisper('HELLO')

function logShout(string){
  console.log(string.toUpperCase())
}
logShout('str')

function logWhisper(string){
  console.log(string.toLowerCase())
}
logWhisper("AnothaOne")

function sayHiToGrandma(string){
  if (string === string.toLowerCase()){
    return "I can't hear you!"
  } else if (string === string.toUpperCase()) {
      return `YES INDEED!`
  } else {return `I love you, too.`}
}
sayHiToGrandma("SELF")

