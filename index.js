function shout(string) {
return string.toUpperCase();
}
'Hello!'.toUpperCase()//'HELLO!';
'Hello!'.toLowerCase()//'hello!';

function whisper(string){
  return string.toLowerCase();
}

 function logShout(string) {
   console.log ('hello'.toUpperCase());
       }

function logWhisper(string) {
  console.log ('hello'.toLowerCase());
}

var uppercase = "HELLO!"

var lowercase = "hello!"

function sayHiToGrandma(string){
  //var uppercase = "HELLO!";
  //var lowercase = "hello!";
  //var string = "I can't hear you";

  if(string === string.toLowerCase()) {
    return ("I can't hear you!") 
  }  
  if (string === string.toUpperCase()) {
    return ("YES INDEED!")
  }
  if (string === "I love you, Grandma.") {
    return ("I love you, too.")
  }}
 