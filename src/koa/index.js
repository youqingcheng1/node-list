const Koa = require('koa');
const app = new Koa();
const Spider = require('../imgData.js'); //引用spider函数

app.use(async (ctx) => {
    let data = await Spider();
    let text = [...data] //将返回的map对象转换成数组
    ctx.body = JSON.stringify(text) //将数组转成文本
});

app.listen(3000);