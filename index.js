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
  if(string.toLowerCase() === string) return `I can't hear you!`;

  if(string.toUpperCase() === string) return `YES INDEED!`;

  if(string === `I love you, Grandma.`) return `I love you, too.`;
}
