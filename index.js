function shout(string)
{
  var string2 = string.toUpperCase();
  return string2;
}

function whisper(string)
{
  var string2 = string.toLowerCase();
  return string2;
}

function logShout(string)
{
  var string2 = shout(string);
  console.log(string2);
}

function logWhisper(string)
{
  var string2 = whisper(string);
  console.log(string2);
}

function sayHiToGrandma(string)
{
  if (string.toLowerCase() === string)
  {
    return "I can't hear you!";
  }
  if (string.toUpperCase() === string)
  {
    return "YES INDEED!";
  }
  if (string === "I love you, Grandma.")
  {
    return "I love you, too.";
  }
}