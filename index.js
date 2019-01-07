function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase() )
}
function logWhisper(string) {
  console.log(string.toLowerCase() )
}
function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"// condition is false hence code is not executed
  } else if (string.toUpperCase() === string) {
    return "YES INDEED!"// execute this code if `conditionToTest1` statement is falsey AND `conditionToTest2` is truthy
  } else if ("I love you, Grandma." === string) {
    return "I love you, too."// execute this code if none of the other conditions are met
  }
}
