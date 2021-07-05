function shout(str) {
  return str.toUpperCase();
}

function whisper(str) {
  return str.toLowerCase();
}

function logShout(str) {
  var shouted = str.toUpperCase();
  console.log(shouted);
}

function logWhisper(str) {
  var whispered = str.toLowerCase();
  console.log(whispered);
}

function sayHiToGrandma(str) {
  var loveWords = "I love you, Grandma."
  if (str === str.toLowerCase()) {
    return "I can't hear you!";
  } else if (str === str.toUpperCase()) {
    return "YES INDEED!";
  } else if (str === loveWords) {
    return "I love you, too.";
    }
  }
