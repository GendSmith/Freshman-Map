# React-Boilerplate

> `React` 项目脚手架

## 介绍

## 目录说明

- `app/` 存放源代码
- `build/` 存放脚手架工具
- `dist/` 存放打包后的项目文件
- `server/` 服务端渲染

## Build Setup

```bash
# 全局安装
#
npm i -g webpack webpack-cli babel-cli

# 安装本地依赖
#
npm i

# 运行 API 服务器
#
npm run start:backend

# React-Boilerplate 开发模式(客户端渲染)
#
npm run start:dev

# React-Boilerplate 生产模式(服务端渲染)
#
npm run start:prod

# 代码格式化
#
npm run prettier
```
## 注意

- 组件的 `Reducer` 和 `Saga` 应在 `store/index.js` 注册

- Nginx配置时参考如下
location / {
        # 设置虚拟目录以覆盖location相对路径带来的影响
        alias /home/ubuntu/Job-WeChat/dist/server;

        # 设置代理域名
        proxy_pass http://localhost:3000;
        proxy_redirect default;

        # 令转发的host和用户输入的域名host一致，避免出现localhost
        proxy_set_header Host $host;
}
