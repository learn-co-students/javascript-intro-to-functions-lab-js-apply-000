// describe('shout(string)',() => {})

function shout (string) {
  // do something
  return string.toUpperCase()
}

shout("hello!");

//describe('whisper(string)'

function whisper(string) {
  return string.toLowerCase()
}

whisper("hello");

//describe('logShout(string)'

function logShout(string) {
  var spy = string.toUpperCase();
  console.log(spy);
}

logShout("hello");

//describe('logWhisper(string)'

function logWhisper(string) {
  const spy = string.toLowerCase();
  console.log(spy);
}

logWhisper("hello");

//describe('sayHiToGrandma(string)'

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!";
  } else if (string.toUpperCase() === string) {
    return "YES INDEED!";
  } else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  } else {
    return nil;
  }
}

sayHiToGrandma('hello!');
