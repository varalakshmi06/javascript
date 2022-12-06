//npm init
//npm i cowsay

const Quote = require('inspirational-quotes');

console.log(Quote.getQuote()); // returns quote (text and author)
console.log(Quote.getQuote({ author: false }); // return quote without author
console.log(Quote.getRandomQuote()); // return any random quote
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a hemooooo",
    e : "oO",
    T : "U "
}));
// or cowsay.think()