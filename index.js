function shout(string) {
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  var message = string.toUpperCase();
  console.log (message);
}

function logWhisper(string){
  var message = string.toLowerCase();
  console.log (message);
}

function sayHiToGrandma (string) {
	if (string === ("I love you, Grandma.")) {
	return ("I love you, too.");
	}
	else if ((string.toUpperCase()) === string) {
	return ("YES INDEED!");
	} else (false); {
	return ("I can\'t hear you!");
	}
	}