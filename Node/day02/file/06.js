//file 06.js

/**
 * npm 包管理工具
 * npm init 项目初始化     =====>  npm init -y       会出现package.json
 * 
 * npm install silly-datetime -save     出现生产环境
 * npm uninstall silly-datetime -S      卸载生产环境   
 * npm install silly-datetime -save-dev 出现开发环境
 * npm uninstall silly-datetime -save-D 卸载生产环境
 * 
 * npm install 下载====>  npm i
 * --save     -S 生产环境 dependencies       
 * --save-dev -D 开发环境 devDependencies
 * npm uninstall 卸载
 * 
 * 生产环境:线上运行的环境
 * 
 * */
 
var sd=require("silly-datetime")
//时间戳格式化
//var time=sd.format(new Date(),"YYYY-MM-DD-hh-mm-ss")
//激励当前时间的前几秒
var time=sd.fromNow(new Date(),3000)
console.log(time)
