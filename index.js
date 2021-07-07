function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  //if string is already in lowercase return 'i cant hear you'
  if (string.toLowerCase() === string) return "I can't hear you!"
  //if string is already in uppercase return "YES INDEED"
  if (string.toUpperCase() === string) return "YES INDEED!"
  //if string says "i love you grandma" return "i love you too"
  if (string === "I love you, Grandma.") return "I love you, too."
}
