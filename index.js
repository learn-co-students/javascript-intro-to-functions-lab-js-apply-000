function shout(str) {
  return str.toUpperCase();
}

const whisper = (str) => { return str.toLowerCase(); };

const logShout = (str) => { console.log(str.toUpperCase()); };

const logWhisper = (str) => { console.log(str.toLowerCase()); };

const sayHiToGrandma = (str) => { 
  if ( str === str.toLowerCase() )  { return 'I can\'t hear you!' }
  else if ( str === str.toUpperCase() ) { return 'YES INDEED!' } 
  if ( str === 'I love you, Grandma.') { return 'I love you, too.' }
  else { return 'Awee that\'s nice, dear.' }
};