function shout (string) {

  return string.toUpperCase();
}

function whisper (string) {

  return string.toLowerCase();
}

function logShout (string) {
string = string.toUpperCase();

  console.log(string);
}

function logWhisper (string) {
  string = string.toLowerCase();

  console.log(string);
}

function sayHiToGrandma (string) {

  //creat newString is equal string
  var newString = string;

  //creat lowerCaseString and UpperCaseString
  var lowerCase = newString.toLowerCase();
  var upperCase = newString.toUpperCase();

  // compare the lowerCase and UpperCase with string, respectively
  if (lowerCase === string) {
    return "I can't hear you!"
  }
  if (upperCase === string) {

    return "YES INDEED!"
  }

  if ("I love you, Grandma." === string) {

    return "I love you, too."
  }

}
