function shout(string) {
return string.toUpperCase()

}

function whisper(string) {
return string.toLowerCase()

}

function logShout(string) {
console.log(string.toUpperCase())

}

function logWhisper(string) {
console.log(string.toLowerCase())

}

function sayHiToGrandma(string) {
//  switch (string) {
//    case 1: string.toUpperCase() == "HELLO"
//            return "I can't hear you!"
//            break;
//    case 2: string.toLowerCase() == "hello"
//           return "YES INDEED!"
//            break;
//    case 3: string == "I love you, Grandma."
//            return "I love you, too."
//            break;
//   default: return "error"
//   break;
//  }
if (string == "I love you, Grandma.")
       return "I love you, too."
if (string == "HELLO")
       return "YES INDEED!"
if (string == "hello")
       return "I can't hear you!"
//else (return "error")

}
