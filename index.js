function shout(string) {
  return string.toUpperCase()
}

function whisper (string) {
  return string.toLowerCase()
}

function logShout (string) {
  console.log(string.toUpperCase())
}

function logWhisper (string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma (string) {
  var ifStringLowerCase = "I can't hear you!"
  var ifStringUpperCase = "YES INDEED!"
  var ifStringILoveYou = "I love you, too."
  
    if (string.toLowerCase() === string) {
      return ifStringLowerCase
    }
    
    else if (string.toUpperCase() === string) {
      return ifStringUpperCase
    }
    
    else if ("I love you, Grandma." === string) {
      return ifStringILoveYou
    }
}

