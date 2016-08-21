function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase());
  return
}
function logWhisper(string) {
  console.log(string.toLowerCase());
  return
}
function sayHiToGrandma(string){
  var lowercase = string.toLowerCase();
  var uppercase = string.toUpperCase();
  var love = "I love you, Grandma."
  if (string === lowercase){
    return "I can\'t hear you!"
  }
  if (string === uppercase){
    return "YES INDEED!"
  }
  if (string === love){
    return "I love you, too."
  }
}
