function sayHiToGrandma(string) {
  if(string.localeCompare("I love you, Grandma.") == 0 )
  {
   return "I love you, too."
  }
  if(string == string.toUpperCase())
  {
    return "YES INDEED!"
  }
  if(string == string.toLowerCase())
  {
    return "I can't hear you!"
  }
}

function logWhisper(string)
{
  string = string.toLowerCase();
  console.log(string);
}

function logShout(string)
{
  console.log(string.toUpperCase());
}
function whisper(string)
{
return string.toLowerCase();
}
function shout(string)
{
return string.toUpperCase();
}
