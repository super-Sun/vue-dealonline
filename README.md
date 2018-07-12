# vue-dealonline

## 技术栈：
vue-cli + vuex + vux + easy-mock-cli
## 架构：
表现层、业务层、api层、基础部件及其他(utils、libs)
## 结构解析
### 表现层
store             状态管理

router          前端路由

views           各个业务页面

component  通用组件

plugins         自定义插件

### 业务层
service 处理服务端返回的数据（类似data format），例如 service 同时调用了不同的api，把不同的返回数据整合在一起在统一发送到 store 中

### api层
负责与所有后端数据接口对接

## 项目运行

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
