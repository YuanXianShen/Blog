// 链接数据库
const monoose = require('mongoose');
monoose.connect('mongodb://localhost:27017/blog', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('ok');
    })
    .catch((err) => {
        console.log(err, 'err');
    })
