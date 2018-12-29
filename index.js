function whisper(string){
  return string.toLowerCase();
}
function logShout(string){
  return console.log(string.toUpperCase());
}
function shout(string){
  return string.toUpperCase();
}
function logWhisper(string){
  return console.log(string.toLowerCase());
}
function sayHiToGrandma(string){
  var uppercase = 'HELLO';
  var lowercase = 'hello';
  var mixedCase = 'Hi there!';

  if (string.toUpperCase() === string){
    return "YES INDEED!";
  }else if(string.toLowerCase() === string){
    return "I can\'t hear you!";
  }else if (string.toLowerCase() !== string && string.toUpperCase() !== string){
    return "I love you, too.";
  }
}
