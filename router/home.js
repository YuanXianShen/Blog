const express = require('express');

// 创建页面展示路由
const home = express.Router();

home.get('/', (req, res) => {
    res.send('博客首页')
});

module.exports = home;