/*Returns a string with uppercase values*/
function shout(string) {
  return string.toUpperCase()
}

/*Returns a string with lowercase values */
function whisper(string) {
  return string.toLowerCase()
  }

  /* describe('logWhisper(string)', function() {
  it('calls console.log() its one argument in all lowercase', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')
    console.log.restore()*/
    
    function sayHiToGrandma(string) {
    var uppercase = 'HELLO'
    uppercase.toUpperCase() === uppercase //true
    var lowercase = 'hello' 
    lowercase.toLowerCase() === lowercase //true
    var mixedCase = 'Hi there!'
    mixedCase.toLowerCase() === mixedCase //false
    mixedCase.toUpperCase() === mixedCase //false
    console.log().toLowerCase 
    }