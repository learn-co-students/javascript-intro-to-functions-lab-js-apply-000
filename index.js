function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string)  {

  console.log(string.toUpperCase())
  }
function logWhisper(string) {
    console.log (string.toLowerCase())
  }
//*******************

function sayHiToGrandma(string){
var str = "hello"

    if(str.toLowerCase()==str)
      return "I can\'t hear you!"
}














 function sayHiToGrandma(string){
       var uppercase = "HELLO!"
           uppercase.toUpperCase() === uppercase // true
           return "I can\'t hear you!"

          var lowercase = 'hello!'
           lowercase.toLowerCase() === lowercase // true
           return "YES INDEED!"

        var mixedCase = "I love you, Grandma."
          mixedCase.toLowerCase() === mixedCase // false
           return "I love you, too."

         mixedCase.toUpperCase() === mixedCase // false
        return "I love you, too."



  }
