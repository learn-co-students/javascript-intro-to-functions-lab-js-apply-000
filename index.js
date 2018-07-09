function shout(ss) {
  return ss.toUpperCase()
}

function whisper(ss) {
  return ss.toLowerCase()
}

function logShout(ss) {
  console.log(ss.toUpperCase())
}

function logWhisper(ss) {
  console.log(ss.toLowerCase())
}

function sayHiToGrandma(ss) {
  if (ss.toUpperCase() === ss)
  return "YES INDEED!"
  if (ss.toLowerCase() === ss)
  return "I can't hear you!"
  else 
  return "I love you, too."
}