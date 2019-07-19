var http=require("http")
var fs=require('fs')
http.createServer((req,res)=>{
	res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
	fs.readFile('./1.txt',(err,data)=>{
		res.end(data)
	})
}).listen(3000)
