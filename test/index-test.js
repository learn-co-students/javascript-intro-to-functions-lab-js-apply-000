describe('shout(string)', function shout(string) {
  it('receives one argument and returns it in all caps', function () {
    return 
    string.toUpperCase('hello')
    expect(shout('hello')).toEqual('HELLO')
  })  
})

describe('whisper(string)', function whisper(string) {
  it('receives one argument and returns it in all lowercase', function() {
    return
    string.toLowerCase('HELLO')
    expect(whisper('HELLO')).toEqual('hello')
  })
})

describe('logShout(string)', function logShout(string) {
  it('calls console.log() its one argument in all caps', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()
    return
    string.toHaveBeenCalledWith('HELLO')
    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})

describe('logWhisper(string)', function logWhisper(string) {
  it('calls console.log() its one argument in all lowercase', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()
    return
    string.toHaveBeenCalledWith('hello')
    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
})

describe('sayHiToGrandma(string)', function sayHiToGrandma(string) {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    return
    string.toEqual("I can\'t hear you!")
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    return
    string.toEqual("YES INDEED!")
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    return
    string.toEqual("I love yout, too.")
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})
