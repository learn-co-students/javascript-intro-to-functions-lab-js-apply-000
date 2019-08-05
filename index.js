function shout(string) {return string.toUpperCase ()}
function whisper(string) {return string.toLowerCase ()}
function logShout(string) {console.log ('HELLO');}
function logWhisper(string) {console.log ('hello');}
function sayHiToGrandma (aWord) {
  var cantUnswer = "I can't hear you!";
  var yesUnswer = "YES INDEED!";
  var lovUnswer = "I love you, too.";
  if (aWord.toLowerCase(aWord) === aWord) {
    return cantUnswer;
  }
  else if (aWord.toUpperCase(aWord) === aWord) {
    return yesUnswer;
  }
  else if ("I love you, Grandma." === aWord) {
    return lovUnswer
  }}