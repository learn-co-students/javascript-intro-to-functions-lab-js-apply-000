function shout(string){
  string=string.toUpperCase(); 
  return string
}


function whisper(string){
  string=string.toLowerCase(); 
  return string; 
}


function logShout(string){
  console.log(string.toUpperCase()); 
  
}

function logWhisper(string){
  console.log(string.toLowerCase()); 
}


function sayHiToGrandma(string){
  if(string =="hello"){
    return "I can't hear you!"; 
  }
  else if(string=='HELLO'){
    return "YES INDEED!";
  }

  else if(string == "I love you, Grandma."){
    return 'I love you, too.'
  }
}

