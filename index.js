let shout = str => str.toUpperCase()

let whisper = str => str.toLowerCase() 

let logShout = str => console.log(shout(str))

let logWhisper = str => console.log(whisper(str))

let sayHiToGrandma = str => {
  if (str == "I love you, Grandma."){
      return "I love you, too." 
  }
  return str === whisper(str) ? "I can't hear you!" : "YES INDEED!"
}