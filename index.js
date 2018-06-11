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
  
  if(string){
  return string.toLowerCase();
  }
  
  else if(string){
    return string.toUpperCase();
    
  }
  
  else {
    return "I love you, too.";
  }
}