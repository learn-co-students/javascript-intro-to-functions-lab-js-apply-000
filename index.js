function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var greetingOne = 'hello';
  var responseOne = "I can\'t hear you!";
  var greetingTwo = 'HELLO';
  var responseTwo = "YES INDEED!";
  var greetingThree = "I love you, Grandma.";
  var responseThree = "I love you, too.";  
    
    if (string.toLowerCase() === string) {
      return responseOne;
    }  
  
    if (string.toUpperCase() === string) {
      return responseTwo;
    }
    
    if (string === "I love you, Grandma.") {
      return responseThree;
    }  
}
