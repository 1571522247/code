//http 引入服务器模块
var http=require("http")
var art=require("art-template")
//fs 文件系统
var fs=require("fs")
//创建服务器
http.createServer((req,res)=>{
	var newData={
		list:["1","2","3","4"]
	}
	fs.readFile("./form.art",(err,data)=>{
		var str=data.toString()
		var result=art.render(str,newData)
		res.end(result)
	})
}).listen(3000)
