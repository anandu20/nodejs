const url=require("url")
let result=url.parse("http://www.google.com/about.html?username=alan")
console.log(result.search.split("=")[1]);
