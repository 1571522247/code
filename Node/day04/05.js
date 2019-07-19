var express=require("express")
var cookieParser=require("cookie-parser")
var app=express()
app.use(cookieParser())
app.get("/",(req,res)=>{
	res.send("首页")
})
app.get("/set",(req,res)=>{
	//如何设置cookie
	//cookie httpOnly true false domain 域名  MaxAge 有效日期 size大小 Expries 过期时间
	res.cookie("userName","tom",{MaxAge:20000},httpOnly:true)
	res.send("cookie设置成功")
})
app.get("/get",(req,res)=>{
	var name=req.cookies.userName
	console.log(name)
	res.send("读取成功"+name)
})

app.listen(3000)
