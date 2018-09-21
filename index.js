function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  var x = string.toUpperCase();
  console.log(x);
}

function logWhisper(string) {
  var y = string.toLowerCase();
  console.log(y);
}

function sayHiToGrandma(string) {
  let low = "hello";
  let high = "HELLO";
  let love = "I love you, Grandma.";
  if (low === string)
    {
      string = "I can't hear you!"
      return string;
    
    }
  else if (high === string)
  {
    string = "YES INDEED!";
    return string;
  }
  else if (love === string)
  {
    string = "I love you, too.";
    return string;
  }
  }
