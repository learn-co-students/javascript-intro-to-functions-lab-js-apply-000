//  Index.js
//  Created by Charles Albert Samuels on 12.04.16.

//EFFECTS: returns string in all UPPERCASE
function shout(string) {
  return string.toUpperCase()
}

//EFFECTS: returns string in all lowercase
function whisper(string) {
  return string.toLowerCase()
}

//EFFECTS: prints string in all UPPERCASE to console log
function logShout(string) {
  console.log(shout(string))
}

//EFFECTS: prints string in all lowercase to console log
function logWhisper(string) {
  console.log(whisper(string))
}

//EFFECTS: prints reply depending on string input
function sayHiToGrandma(string) {
//if all lowercase
  if (whisper(string) === string) {
    return "I can't hear you!"
  }
//IF ALL UPPERCASE
  else if (shout(string) === string) {
    return "YES INDEED!"
  }
//if string input is 'I love you, Grandma'
  else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
  else return
}
