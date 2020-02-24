function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(shout(string))
}

function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string) {
  var greeting = "Hello"
  var loveu = "I love you, Grandma."
  
  if (string === greeting.toLowerCase()) {
    return "I can't hear you!"
  } else if (string === greeting.toUpperCase()) { 
    return "YES INDEED!"
  } else if (loveu === string) {
    return "I love you, too."
  }
}
