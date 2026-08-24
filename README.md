# miniprogram1

一个基于微信开发者工具的原生微信小程序示例项目。

## 项目说明

当前项目包含一个首页示例：显示文字和图片，并通过按钮切换文字内容。

## 技术栈

- 微信小程序原生开发
- JavaScript
- WXSS
- WXML

## 目录结构

```text
miniprogram-2/
├── app.js                    # 小程序入口
├── app.json                  # 全局配置
├── app.wxss                  # 全局样式
├── components/               # 自定义组件
├── pages/index/              # 首页页面
├── image/                    # 图片资源
├── project.config.json       # 微信开发者工具项目配置
├── sitemap.json              # 小程序 sitemap 配置
└── .gitignore                # Git 忽略规则
```

## 运行方式

1. 安装并打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)。
2. 选择“导入项目”。
3. 选择本项目根目录。
4. 使用已绑定的 AppID，或在 `project.config.json` 中替换为自己的 AppID。
5. 编译并预览项目。

## 注意事项

- `project.private.config.json` 是本地开发配置，不会提交到 Git。
- 不要将 AppSecret、Token、密码或其他敏感配置写入前端代码。
- `image/` 目录中的图片应确保拥有合法使用权。
- 小程序的网络请求域名需要在微信公众平台配置为合法域名。

## License

暂未指定开源许可证。
