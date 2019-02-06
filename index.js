const shout = (string) => {
  return string.toUpperCase()
}
const whisper = (string) => {
  return string.toLowerCase()
}
const logWhisper = (string) => {
  console.log(whisper(string))
}
const logShout = (string) => {
  console.log(shout(string))
}
const sayHiToGrandma = (string) => {
  let response = ''
  if (string === shout(string)) response = "YES INDEED!"
  else if (string === whisper(string)) response = "I can't hear you!"
  else if (string === "I love you, Grandma.") response = "I love you, too."
  return response
}
