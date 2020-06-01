function Spider() {
  return new Promise((resolve) => {
    require("chromedriver"); //chrome浏览器驱动
    let webdriver = require("selenium-webdriver"); //浏览器自动操作
    let cheerio = require("cheerio"); //获取页面数据
    let fs = require("fs");

    let driver = new webdriver.Builder().forBrowser("chrome").build();

    let data = new Map();

    driver.get("http://fe-test.mini1.cn/snow-activity/2020/"); //目标网站
    driver.getPageSource().then((val) => {
      const $ = cheerio.load(val); //解析网站
      let result = $(".tableArray-wrap ul").find("img");
      let parent, title, name, imgSrc;
      result.each((i, elem) => {
        let obj = {};
        parent = $(elem).closest("li"); //图片所在li父节点
        title = parent.find("p.title").text();
        name = parent.find("p.text").text();
        imgSrc = $(elem).attr("src");
        obj = {
          imgSrc,
          title,
        };
        data.set(name, obj);
      });

      for (item of data.entries()) {
        console.log(item);
      }
      driver.close();
      resolve(data); //返回data
      return data;
    });
  });
}

module.exports = Spider;
