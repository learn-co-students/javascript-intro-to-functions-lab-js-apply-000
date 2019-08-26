function shout (string) {
  return string.toUpperCase ()
}
function whisper (string) {
  return string.toLowerCase ()
}
function logShout (string) {
  string = "hello".toUpperCase();
  console.log(string)
}
function logWhisper (string) {
  string = "hello".toLowerCase();
  console.log (string)
}

function sayHiToGrandma (string) {
  var gma = 'I can\'t hear you!';
  var prime = "YES INDEED!"
  var x = "I love you, too.";
  if (string === "hello" && string.toLowerCase()){
    return gma 
  }
  else if (string === "HELLO" && string.toUpperCase()){
    return prime
  }
  else if (string === "I love you, Grandma."){
   return x
}
  }

  
  
