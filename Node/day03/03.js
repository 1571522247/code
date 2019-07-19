var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
	res.writeHead(200,{"Content-type":"text/html;charset=UTF8"})
	if(req.url=="/favicon.ico"){
		res.end();
	}
	//读文件
//	fs.readFile("./static/1.txt",(err,data)=>{
//		
//		res.end(data.toString())
//	})
	//写文件
//	fs.writeFile("./static/1.txt","写入的内容",{flag:"a"},(err)=>{
//		if(err){
//			throw error
//		}
//		res.end("success")
//	})
	//读取并写入
//	fs.readFile("./static/1.txt",(err,data)=>{
//		fs.writeFile('./static/2.txt',data,(err)=>{
//			res.end("success")
//		})
//	})

	//	copyFile
//	fs.copyFile("./static/1.txt","./static/2.txt",(err)=>{
//		res.end("success")
//	})
//	//rename改名
//	fs.rename("./static/1.txt","./static/2.txt",(err)=>{
//		res.end("success")
//	})
	//删除文件  unlink
//	fs.unlink("./static/2.txt",(err)=>{
//		res.end("success")
//	})
	//创建目录
//	fs.mkdir("./aa",(err)=>{
//		res.end("hahah")
//	})
//	删除目录
//	fs.rmdir("./aa",(err)=>{
//		res.end("hahah")
//	})
//	读取目录
//	fs.readdir("./static",(err,data)=>{
//		console.log(data)
//		res.end("hahah")
//	})
	//查看目录信息
//	fs.stat("./static",(err,stats)=>{
//		console.log(stats.isFile())//是否是文件
//		console.log(stats.isDirectory())//是不是目录
//		res.end("hahah")
//	})
	
	//流   stream  文件流    createReadStream 创建一个文件读取流
	var stream=fs.createReadStream("./static/1.txt")
	var content=""
	stream.on("data",(chunk)=>{
//		console.log(chunk)
		content+=chunk
	})
	stream.on("end",(chunk)=>{
		console.log('数据接收完毕')
		res.end(content)
	})
	//data数据读取的过程        end  数据读取完成
	
}).listen(3000)

/**
 * 从a的文件夹中去除所有的的文件夹
 * for  let(除了该方法的 其他方式)
 * 
 * */