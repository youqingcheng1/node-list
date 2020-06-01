# node获取列表项目
---
node + koa 爬虫列表
src目录: node index.js 运行基础
src/koa目录：node idnex.js 运行抓取数据

## 项目初始化
npm init -y   初始化packge.json


## cheerio
cheerio是jquery核心功能的一个快速灵活而又简洁的实现，主要是为了用在服务器端需要对DOM进行操作的地方
_load()_ 解析页面

## jquery
 _each()_ :以每一个匹配的元素作为上下文来执行一个函数。
 _closest()_  :从当前的元素开始查找，直到找到符合的为止
 _parents()_ :从父元素开始匹配寻找
 _attr()_ :设置或返回被选元素的属性值。
 _find()_ :查找节点
 _text()_:查找文本
````
$("img").attr({ src: "test.jpg", alt: "Test Image" });
````
## javascript
_entries()_ :方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)。
_close()_ :方法用来关闭浏览器

#### Map()
>> map数据结构，类似于对象，不同的是更趋向于键值对，对象‘string-value’，map‘value-value’ 

_set()_ 方法为 Map 对象添加或更新一个指定了键（key）和值（value）的（新）键值对。
_get()_ 方法读取key对应的键值，如果找不到key，返回undefined。
_entries()_ 返回Map所有成员的遍历器

## node 

fs 模块提供了用于与文件系统进行交互


