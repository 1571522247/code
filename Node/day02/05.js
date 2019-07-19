//queryString 查询字符串
var queryString=require("querystring")
console.log(queryString)
//queryString.Stringfiy   将对象转化为字符串
//queryString.parse       将字符串转化为对象
//http://127.0.0.1:3000?name=ton&age=20
//var url=queryString.stringfiy({name:"tom",age:"20"})
var url=qureyString.parse("name=tom&age=20")
console.log(url)