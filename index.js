// Error 1 - receives one argument and returns it in all caps
function shout(string) {
  return string.toUpperCase()
}

// Error 2 - receives one argument and returns it in all lowercase
function whisper(string) {
  return string.toLowerCase()
}

// Error 3 - calls console.log() its one argument in all caps
function logShout(string) {
  console.log(string.toUpperCase())
}

// Error 4 - calls console.log() its one argument in all lowercase
function logWhisper(string) {
  console.log(string.toLowerCase())
}

// Function for Errors 5-7
function sayHiToGrandma(string)
{
    // Error 5 - returns "I can\'t hear you!" if `string` is lowercase
    if (string.toLowerCase() === string)
      return "I can't hear you!"

    // Error 6 - returns "I love you, too." if `string` is "I love you, Grandma."
    // Using else if, will only evaluate if known to not be lowercase
    else if (string.toUpperCase() === string)
      return "YES INDEED!"

    // Error 7 - returns "I love you, too." if `string` is "I love you, Grandma."
    if (string === "I love you, Grandma.")
      return "I love you, too."
}
