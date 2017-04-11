console.log("hello");
var sonnet = document.getElementById("sonnet").innerHTML;
var index = sonnet.indexOf("orphans");
console.log("testing", index);

var length = sonnet.length;
console.log("test length", length);

sonnet = sonnet.replace("winter", "yuletide");
console.log("replacing winter", sonnet);

sonnet = sonnet.replace(/the /gi, "a large ");
console.log(sonnet);

document.getElementById("sonnet").innerHTML = sonnet;
