function shout(string){
  return string.toUpperCase();
}

function whisper (string){
  return string.toLowerCase();
}

function logShout(string){
  console.log (shout(string));
}

function logWhisper(string){
  console.log (whisper(string));
}

function sayHiToGrandma (string){
  
  var upperCase = string.toUpperCase()=== string;
  var lowerCase = string.toLowerCase()=== string;
  var mixCase = (string.toUpperCase()!= string && string.toLowerCase != string);
  
  if (string === "I love you, Grandma."){
    return "I love you, too.";
  }
  else if (upperCase){
    return "YES INDEED!";
  }
  else {
    return "I can\'t hear you!";
  }
  
}