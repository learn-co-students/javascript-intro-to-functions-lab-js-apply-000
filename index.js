function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) 
    {
  console.log(string.toUpperCase()) 
}

function logWhisper(string)
{
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var GlowerCase = "I can't hear you!" ;
  var GupperCase = "YES INDEED!" ;
  var Glov ="I love you, too.";
  if (string === string.toLowerCase()) 
  {
  return GlowerCase; 
  }
    else if (string === "I love you, Grandma.")
  {
    return Glov;
  }
  else if (string === string.toUpperCase()) {
    return GupperCase
  }
}
  






