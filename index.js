function shout(string) {
  return string.toUpperCase()
}

shout("hello")

function whisper(string) {
  return string.toLowerCase()
}

whisper("HELLO")

function logShout(spy) {
  let turtle = spy.toUpperCase()
  console.log(turtle)
}

logShout("hello")

function logWhisper(string) {
  let spy = string.toLowerCase()
  console.log(spy)
}

logWhisper("Hello")

function sayHiToGrandma(string) {
  if (string == string.toLowerCase()) {
    return "I can't hear you!";
  }
  else if (string == string.toUpperCase()) {
    return "YES INDEED!";
  }
  else if (string == "I love you, Grandma.") {
    return "I love you, too."
  }
  else {
    return "wot in tarnation"
  }
}

sayHiToGrandma()
