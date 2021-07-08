// To uppercase
function shout(string){
  return string.toUpperCase()
}

//To lowercase
function whisper(string){
  return string.toLowerCase()
}

// To logWhisper
function logWhisper(string){
  return console.log(string.toLowerCase())
}

// to logShout
function logShout(string){
  return console.log(string.toUpperCase())
}

// sayHiToGrandma -lowercase
function sayHiToGrandma(string){
  let spceHlder1 = "I can\'t hear you!";
  let spceHlder2 = "YES INDEED!";
  let spceHlder3 = "I love you, too.";
  if( string === string.toLowerCase()){
    return spceHlder1;
  }else if(string === string.toUpperCase()){
    return spceHlder2;
  }else if(string != string.toUpperCase() || string !=toLowerCase()){
    return spceHlder3;
  }
}
