function shout(string) {return string .toUpperCase()}
function whisper(string) {return string .toLowerCase()}
function logShout(string) {(console.log() .toUpperCase())}
function logWhisper(string) {console.log() .toLowerCase()}
function shout(string) {return string .toUpperCase()}
function whisper(string) {return string .toLowerCase()}
function logShout(string) {console.log(string .toUpperCase());}
function logWhisper(string) {console.log(string .toLowerCase());}
function sayHiToGrandma(string){
  var cantHear = "I can't hear you!";
  var canHear = "YES INDEED!";
  var willHear = "I love you, too.";
  if (string.toLowerCase()===string){return cantHear;}
  else if (string.toUpperCase()===string){return canHear;}
  else if (string==='I love you, Grandma.'){return willHear;}
} 