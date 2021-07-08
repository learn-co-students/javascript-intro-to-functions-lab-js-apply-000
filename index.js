//1
function shout(string) {
  return string.toUpperCase();
}

//2
function logShout(string) {
  return console.log(string.toUpperCase());
}

//3
function whisper(string) {
  return string.toLowerCase()
}

//4
function logWhisper(string) {
  return console.log(string.toLowerCase());
}

//4-5-6
function sayHiToGrandma(string) {
	if (string == string.toLowerCase()) {
		console.log("I can't hear you!");
		return "I can't hear you!";
	}

	if (string == string.toUpperCase()) {
		console.log('YES INDEED!');
		return 'YES INDEED!';
	}

	if (string === 'I love you, Grandma.') {
		return 'I love you, too.';
	}
}
