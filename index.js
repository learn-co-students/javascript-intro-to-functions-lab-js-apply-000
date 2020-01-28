function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  var caps;
  var notCaps;
  var mixedCaps;
  
  if (string.toUpperCase() === string){ 
  caps = true;
  }
  else if (string.toLowerCase() === string) {
    notCaps = true;
  }
  else{
  mixedCaps = true;
}
  if (caps){
    return "YES INDEED!";
  }
  else if (notCaps){
    return "I can't hear you!";
  }
  else if (string == "I love you, Grandma."){
    return "I love you, too.";
  }
  
}

```
var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase // true

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase // true

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase // false

mixedCase.toUpperCase() === mixedCase // false
```