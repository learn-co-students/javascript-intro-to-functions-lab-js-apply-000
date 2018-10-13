function shout(string){
  return string.toUpperCase();
}
function whisper(string){
  return string.toLowerCase();
}
function logShout(string){
  console.log(string.toUpperCase());
}
function logWhisper(string){
  console.log(string.toLowerCase());
}
function sayHiToGrandma(string)
{
  var rtn;
  
  switch (
    shout(string) != string && whisper(string) != string
    )
  {
     case true:
        switch (string)
        {
          case "I love you, Grandma.":
            rtn = "I love you, too.";
            break;
          default:
            break;
      }
        break;
      case false:
        switch (whisper(string) === string)
        {
          case true:
            rtn =  "I can\'t hear you!";
            break;
          case false:
            rtn = "YES INDEED!";
            break;
      }
      break;
   
  }
  return rtn.toString();
}


