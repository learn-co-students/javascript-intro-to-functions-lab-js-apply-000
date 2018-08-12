function shout(string) {
  return string.toUpperCase()   //1
}


function whisper(string) {
  return string.toLowerCase()   //2 
}


function logShout (Hello) {
  console.log(Hello.toUpperCase( ));       // review and understand
}


function logWhisper (Hello) {
  console.log(Hello.toLowerCase( ));       // review and understand
}

function sayHiToGrandma(string) {
  var lowercase = string.toLowerCase();
  var uppercase = string.toUpperCase();
  if(lowercase === string) {
    return "I can't hear you!";
  } else if (uppercase === string)   {
    return "YES INDEED!";
  } else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}