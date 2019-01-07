//String to uppercase//
function shout(string) {
  return string.toUpperCase()
}
//String to lowercase//
function whisper(string) {
  return string.toLowerCase()
}
//Console log string in uppercase//
function logShout(string) {
  var a = string.toUpperCase();
  console.log(a)
}
//Console log string in lowercase//
function logWhisper(string) {
  var b = string.toLowerCase();
  console.log(b)
}
//Respond to grandma if string is; lowercase, uppercase or "I love you, Grandma"//
function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!"
  }
  else if (string === string.toUpperCase()) {
    return "YES INDEED!"
  }
  else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
