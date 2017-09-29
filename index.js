function shout(string) {
  return string.toUpperCase()
}
//oh spoooky!

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string))
}

function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string){
  if (string == 'I love you, Grandma.'){
    return "I love you, too."
  }

  if (whisper(string) == string) {
    return "I can't hear you!"
  }
  else if (shout(string) == string) {
    return "YES INDEED!"
  }
  else {
    return "i mean don't we need a condtion for this."
  }
  }
