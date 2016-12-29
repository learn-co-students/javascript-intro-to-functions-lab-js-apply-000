function shout(str){
  return str.toUpperCase();
}
shout("hello");
//------------------------------------------------------

function whisper(str){
  return str.toLowerCase();
}
whisper("HELLO");
//--------------------------------------------------------
function logShout(str){

var s = str.toUpperCase();
return s
}
console.log(logShout('hello'))
//--------------------------------------------------------
function whisper(str){

var s = str.toLowerCase();
return s
}
console.log(whisper('HELLO'))
//--------------------------------------------------------

function sayHiToGrandma(string){
var word = "hello";
var str = "I love you, Grandma."
  if (string===word.toLowerCase()){
    return "I can't hear you!";
  }else if(string===word.toUpperCase()){
    return "YES INDEED!";
  }else if(string===str){
    return "I love you too";
  }
}
sayHiToGrandma("hello")
