function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  const spy = string;
  console.log(spy.toUpperCase());
}

function logWhisper(string) {
  const spy = string;
  console.log(spy.toLowerCase());
}

function sayHiToGrandma(string) {
  
  var lowercase = "hello"
  
  lowercase.toLowerCase() === lowercase // true
  
  var uppercase = "HELLO"
  
  uppercase.toUpperCase() === uppercase // true
  
  var mixedCase = "Hi there!"
  
  mixedCase.toLowerCase() === mixedCase // false
  
  mixedCase.toUpperCase() === mixedCase // false
  
  if (string === lowercase) {
  
    return "I can\'t hear you!";
    } else if (string === uppercase) {
      return "YES INDEED!";
    } else {
      return 'I love you, too.';
    }
}