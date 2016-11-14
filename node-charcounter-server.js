// CHARACTER COUNTER - SERVER
// PURPOSE: Server-side script to receive a phrase from the client, which will then parse the phrase and output the count of each character in the phrase. NOTE: Character counts will aggregate with each new phrase sent by client, until a 'RESET-CM' is sent which will reset character counts.

var express = require('express'),
http = require('http'),
qs = require('querystring'),
sys = require('util');

// INITIALIZE CHARACTER MAP
if(global.cm == undefined){
	global.cm = {};
}

// CREATE SERVER
http.createServer(function (req, res) {
	// INITIALIZE CONTENT STRING
    var content = '';
    // ON REQUEST DATA, ADD DATA TO CONTENT STRING
    req.on('data', function (data) {
        content += data;
    });
    // ON REQUEST END...
    req.on('end', function () {
    	// IF CONTENT STRING IS EMPTY...
    	if (content != ''){
    		// GET PHRASE FROM DATA
			var data = qs.parse(content);
			var phrase = data['phrase'];

			// RESET CHARACTER MAP IF 'RESET-CM'
			if(phrase == 'RESET-CM'){
				cm = {};
				phrase = '';
			}

			// GET SIZE OF PHRASE AND OUTPUT SIZE+PHRASE
			var size = phrase.length;
			sys.log("Phrase: " + phrase);
			sys.log("Num. of characters: " + size);
			
			// LOOP THROUGH NUM OF CHARACTERS IN PHRASE
			for(var ii = 0; ii < size; ii++){
				// GET INDIVIDUAL CHARACTER
				var chr = phrase.charAt(ii);
				// CHECK IF CHARACTER IS IN CHARACTER MAP
				if(chr in cm){
					// IF YES, THEN CHARACTER MAP COUNT+1
					cm[chr] = cm[chr] + 1;
				}else{
					// IF NO, THEN CHARACTER MAP COUNT=1
					cm[chr] = 1;
				}
			}
			
			// FOR EACH CHARACTER IN CHARACTER MAP, OUTPUT CHARACTER+COUNT
	        for(var key in cm){
				sys.log(key + ": " + cm[key])
			}
			
			// SEND RESPONSE
			res.writeHead(200);
			res.end();
			return;
		}
    });

}).listen(3000);