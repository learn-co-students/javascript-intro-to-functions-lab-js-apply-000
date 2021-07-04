function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function sayHiToGrandma(string){
  var lowerCaseString = string.toLowerCase();
  var upperCaseString = string.toUpperCase();
  if(string === lowerCaseString){
    return 'I can\'t hear you!';
  }
  if(string === upperCaseString){
    return 'YES INDEED!';
  }
  if(string === 'I love you, Grandma.'){
    return 'I love you, too.';
  }
}

function logShout(string){
  var upperCaseString = string.toUpperCase();
  console.log(upperCaseString);
}

function logWhisper(string){
  var lowerCaseString = string.toLowerCase();
  console.log(lowerCaseString);
}