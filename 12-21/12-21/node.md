# node 
- Node是基于chromeV8引擎，能够让js运行在服务端，通过npm去下载功能模块包 也是使用js语法  js能够写前端也能写后端，是真正实现前后统一的全栈工程师
- 特性
  - 单线程
  - 非阻塞I/O(一个提交完以后，不等结果出来下个接着提交，等出来结果使用事件驱动)
  - 事件驱动
  node擅长处理高密集I/O，高并发的业务。下一些小工具 但是node中没有BOM DOM
# Node.js使用的是commonjs规范
- 引入
  - require('文件')->返回值是一个对象，可以通过解构赋值的方式拿到想要的模块
  - 不加路径的情况：
    - node自带模块
    - node_modules中的模块
- 导出
  - module.exports ={
      a:xx,
      b:xxx
  }