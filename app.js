const express = require('express');
const home = require('./router/home')
const admin = require('./router/admin')
const path = require('path');

// 创建网站服务器
const app = express();
// const user = require('./model/user')
require('./model/connect');
// 告诉express框架模板所在的位置
app.set('views', path.join(__dirname, 'views'));
// 告诉express框架模板默认的后缀
app.set('view engine', 'art');

// 当渲染后缀为art的模板时 所使用的模板引擎是什么
app.engine('art', require('express-art-template'));
// 开放静态资源文件
app.use(express.static(path.join(__dirname, 'public')));

app.use('/home', home);
app.use('/admin', admin);

app.listen(80);
console.log();