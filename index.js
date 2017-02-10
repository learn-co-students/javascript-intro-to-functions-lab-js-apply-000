function shout (str){
  return str.toUpperCase();
}
function whisper(str){
  return str.toLowerCase();
}
function logShout(str){
  console.log(str.toUpperCase());
}
function  logWhisper(str){
  console.log(str.toLowerCase());
}

function sayHiToGrandma(str){
  var uppercase = "HELLO"
  var lowercase = "hello"
  var mixedCase = "I love you, Grandma."
  if(str === lowercase){return "I can't hear you!";}
  if(str === uppercase){return "YES INDEED!";}
	if(str === mixedCase){return "I love you, too.";}
}
