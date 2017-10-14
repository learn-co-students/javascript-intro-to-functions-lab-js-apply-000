function shout(statement) {
  return statement.toUpperCase();
}

function whisper(statement) {
  return statement.toLowerCase();
}

function logShout(statement) {
  console.log(shout(statement));
}

function logWhisper(statement) {
  console.log(whisper(statement))
}

function sayHiToGrandma(statement) {
  var sentence = statement;
  if (sentence.toLowerCase() === statement) {
    return "I can't hear you!";
  } else if (sentence.toUpperCase() === statement) {
    return "YES INDEED!"
  } else if (sentence == "I love you, Grandma.") {
    return "I love you, too."
  }
}
