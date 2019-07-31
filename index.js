function shout(string)
{
  var upper = string.toUpperCase();
  return upper;
}

function whisper(string)
{
  return string.toLowerCase();
}

function logShout(string)
{
  console.log(shout(string));
}

function logWhisper(string)
{
    console.log(whisper(string));
}

function sayHiToGrandma(string)
{
  if (string==="I love you, Grandma.")
  {
    var x = "I love you, too.";
  }
  else if(string.toLowerCase()===string)
  {
    var x = "I can\'t hear you!";
  }
  else if(string.toUpperCase()===string)
  {
    var x = "YES INDEED!";
  }
  return x
}