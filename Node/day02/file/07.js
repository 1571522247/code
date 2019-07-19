var http=require("http")
var fd=require("formidable")
var fs=require("fs")
var sd=require("silly-datetime")
var path=require("path")
http.createServer((req,res)=>{
	if(req.url=="favicon.ico"){
		return
	}
	if(req.url=="/dopost"){
		var form=new fd.IncomingForm()
//		form.uploadDir="./update"
		form.parse(req,function(err,fields,files){
			form.uploadDir="./update"
			//fields文本域     files文件域
			var oldpath=files.pic.path
			var extname=path.extname(files.pic.name)
			var tt=sd.format(new Date(),"YYYYMMDDhhmmss")
			var newpath="./update/"+tt+extname
			console.log(newpath)
			fs.rename(oldpath,newpath,(err)=>{
				res.end("success")
			})
		})
	}
}).listen(3000,()=>{
	console.log("服务区已经启动")
})
