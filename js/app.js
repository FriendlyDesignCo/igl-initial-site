$(document).foundation();
var headers         = ["h1","h2","h3"];                
var rand = Math.floor(Math.random()*headers.length);           
$('.top').addClass(headers[rand]);
//
//
var footers         = ["f1","f2","f3"];                
var rand = Math.floor(Math.random()*footers.length);           
$('.mid').addClass(footers[rand]);

