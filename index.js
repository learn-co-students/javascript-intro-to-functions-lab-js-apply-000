function shout(string) {
return string.toUpperCase()
}

function whisper(string) {
return string.toLowerCase()
}

const logShout = function() {
  console.log("HELLO");
};

logShout()

const logWhisper = function() {
  console.log("hello");
};

logWhisper()

const sayHiToGrandma = function(string) {
  if (string === string.toLowerCase()) {
    return "I can\'t hear you!";
  }
  else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if ("I love you, Grandma.") {
    return "I love you, too."
  }
};
