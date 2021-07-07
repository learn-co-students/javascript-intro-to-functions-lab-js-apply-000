
describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO')
  })
})
'Hello!'.toUpperCase();
function shout(string) {
  return string.toUpperCase()
}

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello')
  })
})
'Hello'.toLowerCase();
function whisper(string) {
  return string.toLowerCase()
}

describe('logShout(string)', function() {
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})
function logShout ('hello') {
console.log('hello'.toUpperCase() );
}



describe('logWhisper(string)', function() {
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
})
function logWhisper ('hello') {
  console.log ('hello'.toLowerCase() );
}

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
function sayHiToGrandma (sayHiToGrandma) {
  var cantUnswer = "i can't hear you";
  var yesUnswer = "YES INDEED!";
  var lovUnswer = "i love you, too.";
  if (aWord.toLowerCase(sayHiToGrandma) === sayHiToGrandma) {
    return yesUnswer;
  }
  else if ("I love you, Grandma." === sayHiToGrandma) {
    return lovUnswer
  }
}
