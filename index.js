var shout = function(string){
  return string.toUpperCase();
}

var whisper = function(string){
  return string.toLowerCase();
}

var logShout = function(string){
  console.log(shout(string));
}

var logWhisper = function(string){
  console.log(whisper(string));
}

var sayHiToGrandma = function(string){
  if(string === whisper(string)){
    return 'I can\'t hear you!'
  }
  else if(string === shout(string)){
    return 'YES INDEED!'
  }
  else if(string === 'I love you, Grandma.'){
    return 'I love you, too.'
  }
}
