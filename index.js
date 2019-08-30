function shout(string)
{
    return string.toUpperCase()
}
function whisper(string)
{
  return string.toLowerCase()
}

var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase

var lowercase = "hello!"

lowercase.toLowerCase() === lowercase

var mixedCase = "Hi there!"

mixedCase.toLowerCase() === mixedCase
mixedCase.toUpperCase() === mixedCase

function logShout(sting)
{
  console.log('HELLO')
}

function logWhisper(string)
{
  console.log('hello')
}

function sayHiToGrandma(string)
{
  if (string == "I love you, Grandma.") 
  {
    return "I love you, too."
  }
  else if (string == "hello")
  {
    return "I can't hear you!"
  }
  else if (string == "HELLO")
  {
    return "YES INDEED!"
  }

}

