const mongoose = require('mongoose');
// 创建用户集合规则
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        // 保证邮箱地址在插入数据库时不重复
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // admin 超级管理员
    // normal 普通用户
    role: {
        type: String,
        required: true
    },
    // 0 启用状态
    // 1 禁用状态
    state: {
        type: Number,
        default: 0
    }
});
// 创建用户集合
const User = mongoose.model('User', userSchema);
// User.create({
//     username: 'ybg',
//     email: '1324445781@qq.com',
//     password: '123456',
//     role: 'admin',
//     state: 0
// }).then(() => {
//     console.log('用户创建成功');
// }).catch((err) => {
//     console.log(err, '用户创建失败');
// })
module.exports = {
    User
}