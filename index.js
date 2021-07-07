/*
describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO')
  })
})
*/

function shout(str) {
  str = str.toUpperCase();
  return str;
}


/*
describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello')
  })
})
*/
function whisper(str) {
  str = str.toLowerCase();
  return str;
}

/*
describe('logShout(string)', function() {
  it('calls console.log() its one argument in all caps', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})
*/
function logShout(str) {
  str = str.toUpperCase();
  console.log(str);
}

/*
describe('logWhisper(string)', function() {
  it('calls console.log() its one argument in all lowercase', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
})
*/
function logWhisper(str) {
  str = str.toLowerCase();
  console.log(str);
}

/*
describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})
*/

function sayHiToGrandma(str) {
  if(str.toLowerCase() === str) {
    str = "I can't hear you!";
  } else if (str.toUpperCase() === str) {
    str = "YES INDEED!";
  } else if (str === "I love you, Grandma.") {
    str = "I love you, too."
  }
  return str;
}