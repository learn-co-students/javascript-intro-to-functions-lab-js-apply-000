var output
function shout(string)
{
  return string.toUpperCase()
}
function whisper(string)
{
  return string.toLowerCase()
}
function logShout(string)
{
output = string.toUpperCase()
console.log(output)
}
function logWhisper(string)
{
  output = string.toLowerCase()
  console.log(output)
}
function sayHiToGrandma(string)
{
  if (string.toLowerCase() === string){
    return "I can't hear you!"
  }
  else if (string.toUpperCase() === string){
    return "YES INDEED!"
  }
  else if (string === "I love you, Grandma.") {
    return "I love you, too."}
  //Check if what's coming in is equal to what you would've expected if you had lower/upper cased the string 
}
