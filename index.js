function shout(deep)
{
  deep=deep.toUpperCase();
  return deep;
}

function whisper(deep)
{
  deep=deep.toLowerCase();
  return deep;
}

function logShout(deep)
{
  console.log(shout(deep));
}

function logWhisper(deep)
{
  console.log(whisper(deep));
}

function sayHiToGrandma(deep)
{
var a="I can't hear you!";
var b="YES INDEED!";
var c="I love you, too.";
if (deep=="I love you, Grandma.")
{
 return c;
}
else
{
  if (deep==deep.toLowerCase())
{
 return a;
}
else
{
return b;
}
}
}
