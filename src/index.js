require('chromedriver')//chrome浏览器驱动
let webdriver = require('selenium-webdriver')//浏览器自动操作
let cheerio = require('cheerio') //获取页面数据
let fs = require('fs');

let driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://www.baidu.com');
driver.getPageSource().then((val)=>{
    const $ = cheerio.load(val);
    let result = $('#u1').text();
    fs.writeFile('me.txt', result, (err)=>{
        if(err) throw err
        console.log('is saved')
    })//讲数据写入mes.txt文件中
})