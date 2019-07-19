//express  node 里面的框架
var express=require("express")
var app=express()
//执行一个get请求
app.get("/",(req,res)=>{
	res.send({"success":"ok"})
})
//在express中路径不区分大小写  同时支持链式操作
app.get("/About",(req,res)=>{
	res.send("about")
}).get("/news",(req,res)=>{
	res.send("news")
})
//app.post("/news",(req,res)=>{
//	res.send("news")
//})
app.listen(3000)
