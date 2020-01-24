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

function sayHiToGrandma(string){
  var x = string
  var y = string
  var z = "I love you, Grandma."
  if ( x === string.toUpperCase()){
    return "YES INDEED!";
  } else if ( y === string.toLowerCase()){
    return "I can't hear you!";
  } else if ( z === string){
    return "I love you, too.";
  }
}