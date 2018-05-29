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
  var uppercase = "HELLO!";
  uppercase.toUpperCase() === uppercase;
  var lowercase = "hello!";
  lowercase.toLowerCase() === lowercase;
  var mixedCase = "I love you, Grandma.";
  mixedCase.toLowerCase() === mixedCase;
  mixedCase.toUpperCase() === mixedCase;
  if (string == uppercase) {
    return "YES INDEED!";
  } else if (string == lowercase) {
    return "I can't hear you!";
  } else {
    return "I love you, too.";
  }
}

sayHiToGrandma('hello!');