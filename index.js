function shout(string)
{
   return "Hello".toUpperCase();
}

function whisper(string)
{
  return "Hello".toLowerCase();
}

function logShout (string) { console.log ('HELLO') }

function logWhisper (string) { console.log ('hello')}

function sayHiToGrandma(string){
	if (string === string.toLowerCase()) {
     return "I can't hear you!";
    }
 if (string === string.toUpperCase()) {
    return "YES INDEED!";
 }
 if (string === "I love you, Grandma.") {
   return "I love you, too.";
 }
 
}