function shout(string) {
  return string.toUpperCase()
}
//creates a function that accepts a string and then makes it all upperase

function whisper(string) {
  return string.toLowerCase()
}
//creates a function that accepts a string and then makes it all lowercase

function logShout(string) {
  console.log (string.toUpperCase())
}
//creates a function that accepts a string and then logs it in upperase

function logWhisper(string) {
  console.log (string.toLowerCase())
}
//creates a function that accepts a string and then logs it in lowercase

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can\'t hear you!"
    //this translates the string to lowercase and then checks if it is the same as the original string, thereby checking if the original string was all lowercase
} else if (string.toUpperCase() === string) {
    return "YES INDEED!"
    //checks if original string was all caps
} else {
    return "I love you, too."
    //checks if original string was mixed case
}
}
