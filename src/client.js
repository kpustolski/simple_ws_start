var io = require('socket.io-client');

var socket = io.connect('http://localhost:18000');

var stdin = process.stdin;
var stdout = process.stdout;

var user = 'user' + (Math.floor((Math.random()*1000)) + 1);

console.log('connecting');

socket.on("connect", function() {


});



