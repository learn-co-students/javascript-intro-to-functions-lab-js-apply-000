function shout(string) {
  return string.toUpperCase()
  
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log (shout(string))
}

function logWhisper(string) {
  console.log (whisper(string))
}

function sayHiToGrandma(String){
	if (String === String.toLowerCase()) {
     return "I can\'t hear you!"
    }
 if (String === String.toUpperCase()) {
    return "YES INDEED!"
    }
  if (String === "I love you, Grandma.") {
    return "I love you, too.";
 }
 }



