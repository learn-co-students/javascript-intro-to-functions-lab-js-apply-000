function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(shout(string));
}

function logWhisper(string) {
  console.log(whisper(string));
}

function sayHiToGrandma(string) {
  //Grandma cannot hear you if you whisper or shout.  If you say you love her she cares, but otherwise she just sits there.
  if(string === "I love you, Grandma."){
    return "I love you, too."
  } else if(string === whisper(string)){
    return "I can't hear you!"
  } else if(string === shout(string)){
    return "YES INDEED!"
  } else {
    return "Grandma doesn't seem to notice you."
  }
}