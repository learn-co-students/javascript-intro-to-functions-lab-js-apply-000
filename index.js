function shout(str) {
	return str.toUpperCase();
}

function whisper(str) {
	return str.toLowerCase();
}

function logShout(str) {
	var upperCase = str.toUpperCase();
	console.log(upperCase);
}

function logWhisper(str) {
	var lowerCase = str.toLowerCase();
	console.log(lowerCase);
}

function sayHiToGrandma(str) {
	var unconditionalLove = "I love you, Grandma.";
	if(str === unconditionalLove || str === unconditionalLove.toLowerCase() || str === unconditionalLove.toUpperCase()) {
		return "I love you, too.";
	}
	else if(str === str.toLowerCase()) {
		return "I can't hear you!";
	}
	else if(str === str.toUpperCase()) {
		return "YES INDEED!";
	} else {
		return "What language are you speaking, dear?";
	}
}
