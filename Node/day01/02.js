var http=require("http")
http.createServer((req,res)=>{
	console.log(res)
	res.writeHead(200,{"Content-type":"text/html;charset=UTF8"})
	res.end("我喜欢学习node")
}).listen(3000)
