  function shout(str) {
    return str.toUpperCase();
  }
  
  function whisper(str) {
    return str.toLowerCase();
  }
  
  function logShout(shout) {
    console.log(shout.toUpperCase());
  }
  
  function logWhisper(whisper) {
    console.log(whisper.toLowerCase());
  }
 
  function sayHiToGrandma(str) {
    if(str === str.toLowerCase()) {
      return "I can't hear you!";
    } else if(str === str.toUpperCase()) {
        return "YES INDEED!";
      } else if(str === "I love you, Grandma.") {
          return "I love you, too.";
    }
  }
  
  
  
  