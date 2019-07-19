var http=require("http")
var path=require("path")
http.createServer((req,res)=>{
	//path.resolve()  会将最后一个参数转化为绝对路径     webpack
//	var oldpath=path.resolve("./aaa/bb")
	//path.nomalize()  路径的格式化
//	var oldpath=path.nomalize("./aa/bb/cc////eee")
	//path.extname()  获取文件的扩展名
//	var oldpath=path.extname("index.html")
	//path.format()  将对象转化为路径 
//	var oldpath=path.format({
//		root:"",//根目录
//		dir:"c:\a\b",//父目录
//		base:"\d"//基点
//	})
//path.isAbsolute() 返回绝对路径
//path.join() 将多段路径进行拼接
//path.relative() 用于将绝对路径转化为相对路径
//path.dirname()返回文件目录
//path.parse() 解析文件路径
	console.log(oldpath)
	res.end()
}).listen(3000);