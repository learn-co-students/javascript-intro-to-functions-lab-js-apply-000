function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(Happy) {
  console.log(Happy.toUpperCase());
}

function logWhisper(City) {
  console.log(City.toLowerCase());
}

function sayHiToGrandma(person) {

  //the first step is to declare 3 variables
  var cantHear = "I can't hear you!";
  var canHear = "YES INDEED!";
  var grandParent = "I love you, too.";

  //if else statement
  if (person.toLowerCase(person) === person)
  {
    return cantHear;
  }
  else if (person.toUpperCase(person) === person)
  {
    return canHear;
  }
  else
  {
    return grandParent
  }
}
