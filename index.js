function shout(string) {
  
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  var caps = string.toUpperCase()
  console.log(caps)
}
function logWhisper(string) {
  var small = string.toLowerCase()
  console.log(small)
}

function sayHiToGrandma(string) {
  var myString = 'I love you, Grandma.'
  for (var i = 0; i < string.length; i++) {
    var letter = string[i]
  if (string === string.toLowerCase()){
    return "I can't hear you!"
  } else if (string === string.toUpperCase()){
    return "YES INDEED!"
  } else if (letter !== myString[i]) {
    return "Cos nie tak" 
  }
  return 'I love you, too.'
  } 
}