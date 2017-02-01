var shout = function(s) {
  var arr = s.split("");
  var arr = arr.map(function(x){
    return x.toUpperCase();
  });
  return arr.join("");
}

var whisper = function(s) {
  var arr = s.split("");
  var arr = arr.map(function(x){
    return x.toLowerCase();
  });
  return arr.join("");
}

var logShout = function(s) {
  var arr = s.split("");
  var arr = arr.map(function(x){
    return x.toUpperCase();
  });
  console.log(arr.join(""));
}

var logWhisper = function(s) {
  var arr = s.split("");
  var arr = arr.map(function(x){
    return x.toLowerCase();
  });
  console.log(arr.join(""));
}

var sayHiToGrandma = function(s) {
  var char = s.charAt(0);
  if (s === "I love you, Grandma.") {
    return "I love you, too.";
  } else if (char == char.toUpperCase()) {
    return "YES INDEED!";
  } else {
    return "I can't hear you!";
  }
}
