function shout(string) {
  
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

//logShout(string) calls console.log() its one argument in all caps:
    // ReferenceError: logShout is not defined
    
    
function logShout (string) {
  console.log(string.toUpperCase( ));
}

//logWhisper(string) calls console.log() its one argument in all lowercase:
  //    ReferenceError: logWhisper is not defined

function logWhisper(string) {
  console.log(string.toLowerCase());
}

// sayHiToGrandma(string) returns "I can't hear you!" if `string` is lowercase

function sayHiToGrandma(string) {
  
  var cantHearU = "I can't hear you!";
  var yesIndeed = "YES INDEED!";
  var loveUToo = "I love you, too."
  
  if (string.toLowerCase(string) === string) {
  return cantHearU;
}

else if (string.toUpperCase(string) === string) {
  return yesIndeed;
}

else if ("I love you, Grandma." === string ) {
return loveUToo;
}
}