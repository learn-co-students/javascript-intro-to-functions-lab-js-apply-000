function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
  }

 function logShout(string) {
  console.log(shout('hello'))
 }

  function logWhisper(string) {
  console.log(whisper('HELLO'))
  }

function sayHiToGrandma(string) {
if (string === whisper(string)) return ('I can\'t hear you!');
if (string === shout(string)) return ('YES INDEED!');
if ('I love you, Grandma.') return ('I love you, too.');
}


