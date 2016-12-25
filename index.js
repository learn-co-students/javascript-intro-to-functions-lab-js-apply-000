function shout (string) {
  return string.toUpperCase()
}

function whisper (string) {
  return string.toLowerCase ()
}


function sayHiToGrandma(string) {
  if (string === "I love you, Grandma."){
    return "I love you, too.";
} else if (string === "HELLO"){
  return "YES INDEED!";
}else {
  return 'I can\'t hear you!';
}
  }

  function logWhisper(string) {
    var spy = "hello";
    console.log (spy);
  }

  function logShout (string) {
    var spy = "HELLO";
    console.log (spy);
  }
