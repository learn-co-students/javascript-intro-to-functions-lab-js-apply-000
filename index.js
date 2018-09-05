function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
   var uppercase = string.toUpperCase(),
       lowercase = string.toLowerCase();
       
  if (string == lowercase){
    string = "I can't hear you!"
  } else if (string == uppercase){
    string = "YES INDEED!"
  } else{
    string = "I love you, too."
  }
  
  return string
}