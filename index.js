

function shout(string)
{


  return string.toUpperCase();
}
//var greeting = shout("hello");
//logShout(string);
function whisper(string)
{

  return string.toLowerCase();
}

//var quietGreeting = whisper(greeting);

function logShout(string)
{
  console.log(shout(string));
}

function logWhisper(string)
{
  console.log(whisper(string))
}

function sayHiToGrandma(string)
{
  if (string === string.toUpperCase())
  {
    var iCanHearYou = "YES INDEED!";
    return iCanHearYou;
  }

  if(string === string.toLowerCase())
  {
    var iCantHearYou = "I can't hear you!";
    return iCantHearYou;

  }

  if(string === "I love you, Grandma.")
  {
    var iLoveYou = "I love you, too.";
    return iLoveYou;
  }

}
