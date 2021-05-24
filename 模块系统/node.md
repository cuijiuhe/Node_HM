## Node中的模块系统

使用Node编写引用程序主要就是在使用：

- EcmaScript语言
  - 和浏览器不一样的地方就是，Node中没有BOM DOM
- 核心模块
  - 文件操作模块f s
  - http服务的http
  - url模块
  - o s操作系统模块
- 第三方模块
  - art-template
  - 需要通过下载的
- 自己写的模块
  - 自己创建的模块

#### 什么是模块化

- 具有文件作用域
  - 加载 require
  - exports.<导出的变量>导出模块 或者       或者 module.exports = 需要导出的对象（只能写一个）
- 通信规则

## require 加载规则

语法：

```javascript
const 自定义变量名 = require('模块');

```

	1. 优先从缓存同步加载加载 
 	2. 不会重复加载
 	3. 

## exports 导出

导出多个成员

```javascript
exports.a = '导出的变量'
exports.a = '导出的变量'

module.exports = {
  
}
```

导出单个成员

```javascript
module.exports = '导出的成员'
```

隐藏代码

```javascript
//Node环境中
module = {
  exports: {}
}

return module.exports;

//在Node中
exports 就是 module.exports的引用
exports === module.exports
//所以 exports不能直接赋值
```



