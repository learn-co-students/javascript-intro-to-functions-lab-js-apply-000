global.expect = require('expect');

const babel = require('babel-core');
const jsdom = require('jsdom');
const path = require('path');

before(function(done) {
  const babelResult = babel.transformFileSync(
    path.resolve(__dirname, '..', 'index.js'), {
      presets: ['es2015']
    }
  );

  const html = path.resolve(__dirname, '..', 'index.html')



function shout(string) {
  return string.toUpperCase()
}
var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase // true

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase // true

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase // false

mixedCase.toUpperCase() === mixedCase // false
