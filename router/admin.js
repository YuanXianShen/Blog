const express = require('express');

// 创建页面展示路由
const admin = express.Router();

admin.get('/login', (req, res) => {
    res.render('admin/login')
});
// 创建用户列表路由
admin.get('/user', (req, res) => {

    res.render('admin/user')
})
module.exports = admin;