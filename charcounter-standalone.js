sys = require('util');

var phrase = "The quick brown fox jumps over the lazy dog";

if(global.hm == undefined){
	global.hm = {};
}

var size = phrase.length;

for(var ii = 0; ii < size; ii++){
	var chr = phrase.charAt(ii);
	if(chr in hm){
		hm[chr] = hm[chr] + 1;
	}else{
		hm[chr] = 1;
	}
}

for(var key in hm){
	sys.log(key + ": " + hm[key])
}