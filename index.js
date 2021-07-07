function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  string = string.toUpperCase();
  console.log(string);
  
}
function logWhisper(string) {
  string=string.toLowerCase();
  console.log(string);
}
let response;
function sayHiToGrandma(string) {if (string === string.toUpperCase()) { 
	response = 'YES INDEED!';}
	else if (string === "I love you, Grandma.") {
	  response = 'I love you, too.';
	}
    else { response = "I can't hear you!" }
  return response;
}
