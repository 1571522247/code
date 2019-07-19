var http=require("http")
http.createServer((req,res)=>{
	console.log("hello node")
	res.end("end")
}).listen(3000)
