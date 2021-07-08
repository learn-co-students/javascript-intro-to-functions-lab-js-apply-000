function shout(string) {
  return string.toUpperCase()
}
shout('Hello')=='HELLO'

function whisper(string) {
  return string.toLowerCase()
}
whisper('HELLo')

function logShout(string){
  console.log(string.toUpperCase())
}
logShout('hello')

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  if (string==string.toLowerCase()) {
    var hear= "I can\'t hear you!"}
  if (string ==string.toUpperCase()){
    var hear= "YES INDEED!" }
    if(string =="I love you, Grandma."){
      var hear= 'I love you, too.'
    }
  return hear
}
sayHiToGrandma('hello')
