// WORD COUNTER - CLIENT
// PURPOSE: Client-side script to send a phrase to the server, which will parse the phrase and output the count of each character in the phrase.

var http = require('http'), 
qs = require('querystring'),
sys = require('util');

// SEND THE PHRASE TO THE SERVER
function send (thePhrase) {
    http.request({
        host: '127.0.0.1'
        , port: 3000
        , url: '/'
        , method: 'POST'
    }, function (res) {
        res.setEncoding('utf-8');
        res.on('end', function () {
            console.log('\n   \033[090m request complete!\033[39m');
            process.stdout.write('\n   Phrase:  ');
        })
        process.exit();
    }).end(qs.stringify({ phrase: thePhrase}));
}

// GET INPUT PHRASE AND OUTPUT
var phrase = process.argv[2];
sys.log(phrase)

// SEND PHRASE TO SERVER
send(phrase.replace('\n', ''));

