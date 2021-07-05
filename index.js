function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(shout(string));
  
}

function logWhisper(string){
   console.log(whisper(string));
}

function sayHiToGrandma(string){
  var newString = string 
  if (newString.toLowerCase() === string ) {
    return "I can\'t hear you!";
  }
  else if (newString.toUpperCase() === string) {
    return "YES INDEED!";
  }
  else if (newString === 'I love you, Grandma.') {
    return "I love you, too.";
  }
  else{
     return
  }
}