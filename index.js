function shout(string) {
  string = "hello";
  return string.toUpperCase();
}

function whisper(string) {
  string = 'HELLO';
  return string.toLowerCase();
}

function logShout(string) {
  string = 'hello';
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  string = 'HELLO';
  console.log(string.toLowerCase());
}


function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === 'I love you, Grandma.') {
    return 'I love you, too.';
  }
}









