var http = require("http")
var url = require("url")
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	//数据库存放的内容
	var admin={
		username:'haha',
		password:'123456'
	}
	res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
	
    var query = url.parse(req.url,true).query;
    console.log(query.name) 
    console.log(query.psw)
    if(query.name==admin.username&&query.psw==admin.password){
    	res.end("登陆成功")
    }else{
    	res.end("登陆失败")
    }
}).listen(3000);
